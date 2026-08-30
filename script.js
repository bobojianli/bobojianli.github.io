/* ============================
   五子棋完整逻辑（含AI三难度+特效）
   ============================ */

// ===== 全局变量 =====
let chessBoard = [];        // 棋盘数据 0空 1黑(玩家) 2白(AI)
let isBlackTurn = true;     // 是否黑棋回合
let gameOver = false;       // 游戏是否结束
let gameMode = 'pvp';       // pvp双人 / pve人机
let aiLevel = 'easy';       // easy简单 / normal普通 / hard困难
let boardSize = 15;         // 棋盘15x15

// ===== 初始化棋盘 =====
function initGobang() {
    chessBoard = Array(boardSize).fill().map(() => Array(boardSize).fill(0));
    isBlackTurn = true;
    gameOver = false;
    const boardDom = document.getElementById('gobangBoard');
    if (!boardDom) return;
    boardDom.innerHTML = '';
    boardDom.style.display = 'grid';
    boardDom.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
    boardDom.style.gap = '0';
    boardDom.style.aspectRatio = '1';
    boardDom.style.background = '#e8c88a';
    boardDom.style.padding = '10px';
    boardDom.style.borderRadius = '8px';
    boardDom.style.position = 'relative';

    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            const cell = document.createElement('div');
            cell.className = 'gobang-cell';
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.style.cssText = `
                position: relative;
                width: 100%;
                padding-bottom: 100%;
                cursor: pointer;
                border: 0.5px solid #b8956a;
                box-sizing: border-box;
            `;
            cell.onclick = () => clickChess(x, y);
            boardDom.appendChild(cell);
        }
    }
    hideModal();
}

// ===== 玩家落子 =====
function clickChess(x, y) {
    if (gameOver) return;
    if (chessBoard[y][x] !== 0) return;
    if (gameMode === 'pve' && !isBlackTurn) return; // AI回合禁止点击

    placeStone(x, y, isBlackTurn ? 1 : 2);

    if (checkWin(x, y)) {
        gameOver = true;
        const winner = isBlackTurn ? '黑棋' : '白棋';
        triggerWinEffect(x, y);
        setTimeout(() => showModal(`${winner}胜利！`, '🎉'), 600);
        return;
    }

    isBlackTurn = !isBlackTurn;

    // 人机模式：AI落子
    if (gameMode === 'pve' && !isBlackTurn && !gameOver) {
        setTimeout(() => aiMove(), 400);
    }
}

// ===== 放置棋子并渲染 =====
function placeStone(x, y, color) {
    chessBoard[y][x] = color;
    const boardDom = document.getElementById('gobangBoard');
    if (!boardDom) return;
    const cells = boardDom.querySelectorAll('.gobang-cell');
    const idx = y * boardSize + x;
    const dot = document.createElement('div');
    dot.className = color === 1 ? 'stone-black' : 'stone-white';
    const isBlack = color === 1;
    dot.style.cssText = `
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 80%; height: 80%;
        border-radius: 50%;
        background: ${isBlack ? 'radial-gradient(circle at 30% 30%, #555, #000)' : 'radial-gradient(circle at 30% 30%, #fff, #ccc)'};
        box-shadow: ${isBlack ? '0 2px 4px rgba(0,0,0,0.5)' : '0 2px 4px rgba(0,0,0,0.3)'};
        animation: stoneDrop 0.2s ease-out;
    `;
    cells[idx].appendChild(dot);
}

// ===== 胜负判断 =====
function checkWin(x, y) {
    const self = chessBoard[y][x];
    const dirs = [[1, 0], [0, 1], [1, 1], [1, -1]];
    for (let [dx, dy] of dirs) {
        let count = 1;
        for (let i = 1; i < 5; i++) {
            let nx = x + dx * i, ny = y + dy * i;
            if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize && chessBoard[ny][nx] === self) count++;
            else break;
        }
        for (let i = 1; i < 5; i++) {
            let nx = x - dx * i, ny = y - dy * i;
            if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize && chessBoard[ny][nx] === self) count++;
            else break;
        }
        if (count >= 5) return true;
    }
    return false;
}

// ===== AI落子（三难度）=====
function aiMove() {
    if (gameOver) return;
    let move;
    if (aiLevel === 'easy') {
        move = aiEasy();
    } else if (aiLevel === 'normal') {
        move = aiNormal();
    } else {
        move = aiHard();
    }
    if (!move) return;
    placeStone(move.x, move.y, 2);

    if (checkWin(move.x, move.y)) {
        gameOver = true;
        triggerWinEffect(move.x, move.y);
        setTimeout(() => showModal('AI胜利！', '😢'), 600);
        return;
    }
    isBlackTurn = true;
}

// 简单AI：随机落子，偶尔堵
function aiEasy() {
    const empty = getEmptyCells();
    if (empty.length === 0) return null;
    // 30%概率堵玩家活三
    if (Math.random() < 0.3) {
        const block = findBlockMove(1, 3);
        if (block) return block;
    }
    return empty[Math.floor(Math.random() * empty.length)];
}

// 普通AI：优先堵活三，其次进攻
function aiNormal() {
    // 自己能赢直接赢
    const win = findWinMove(2);
    if (win) return win;
    // 堵玩家活四
    const block4 = findBlockMove(1, 4);
    if (block4) return block4;
    // 堵玩家活三
    const block3 = findBlockMove(1, 3);
    if (block3) return block3;
    // 自己造活三
    const attack = findBlockMove(2, 3);
    if (attack) return attack;
    // 靠近中心随机
    return getCenterRandom();
}

// 困难AI：评分算法
function aiHard() {
    const win = findWinMove(2);
    if (win) return win;
    const block4 = findBlockMove(1, 4);
    if (block4) return block4;
    const block3 = findBlockMove(1, 3);
    if (block3) return block3;

    // 全棋盘评分
    let bestScore = -1;
    let bestMove = null;
    const empty = getEmptyCells();
    for (let cell of empty) {
        const score = evaluatePosition(cell.x, cell.y);
        if (score > bestScore) {
            bestScore = score;
            bestMove = cell;
        }
    }
    return bestMove || getCenterRandom();
}

function evaluatePosition(x, y) {
    let score = 0;
    // 进攻分
    chessBoard[y][x] = 2;
    score += countLine(x, y, 2) * 10;
    chessBoard[y][x] = 0;
    // 防守分
    chessBoard[y][x] = 1;
    score += countLine(x, y, 1) * 8;
    chessBoard[y][x] = 0;
    // 靠近中心加分
    score += (7 - Math.abs(x - 7)) + (7 - Math.abs(y - 7));
    return score;
}

function countLine(x, y, color) {
    const dirs = [[1, 0], [0, 1], [1, 1], [1, -1]];
    let total = 0;
    for (let [dx, dy] of dirs) {
        let count = 1;
        for (let i = 1; i < 5; i++) {
            let nx = x + dx * i, ny = y + dy * i;
            if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize && chessBoard[ny][nx] === color) count++;
            else break;
        }
        for (let i = 1; i < 5; i++) {
            let nx = x - dx * i, ny = y - dy * i;
            if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize && chessBoard[ny][nx] === color) count++;
            else break;
        }
        total += count;
    }
    return total;
}

// ===== 辅助函数 =====
function getEmptyCells() {
    const cells = [];
    for (let y = 0; y < boardSize; y++) {
        for (let x = 0; x < boardSize; x++) {
            if (chessBoard[y][x] === 0) cells.push({ x, y });
        }
    }
    return cells;
}

function getCenterRandom() {
    const empty = getEmptyCells().filter(c => Math.abs(c.x - 7) <= 5 && Math.abs(c.y - 7) <= 5);
    const pool = empty.length > 0 ? empty : getEmptyCells();
    return pool[Math.floor(Math.random() * pool.length)];
}

function findWinMove(color) {
    const empty = getEmptyCells();
    for (let cell of empty) {
        chessBoard[cell.y][cell.x] = color;
        if (checkWin(cell.x, cell.y)) {
            chessBoard[cell.y][cell.x] = 0;
            return cell;
        }
        chessBoard[cell.y][cell.x] = 0;
    }
    return null;
}

function findBlockMove(color, length) {
    const empty = getEmptyCells();
    for (let cell of empty) {
        chessBoard[cell.y][cell.x] = color;
        if (countLine(cell.x, cell.y) >= length * 2) {
            chessBoard[cell.y][cell.x] = 0;
            return cell;
        }
        chessBoard[cell.y][cell.x] = 0;
    }
    return null;
}

// ===== 胜利特效 =====
function triggerWinEffect(x, y) {
    const boardDom = document.getElementById('gobangBoard');
    if (!boardDom) return;
    // 棋盘闪烁
    let count = 0;
    const flash = setInterval(() => {
        boardDom.style.boxShadow = count % 2 === 0
            ? '0 0 30px 10px rgba(255, 215, 0, 0.8)'
            : '0 0 0 0 transparent';
        count++;
        if (count > 6) clearInterval(flash);
    }, 150);
}

// ===== 弹窗 =====
function showModal(text, emoji) {
    let modal = document.getElementById('gameModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'gameModal';
        modal.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center;
            z-index: 9999; animation: fadeIn 0.3s ease;
        `;
        document.body.appendChild(modal);
    }
    modal.innerHTML = `
        <div style="
            background: #fff; padding: 40px 60px; border-radius: 16px;
            text-align: center; box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        ">
            <div style="font-size: 60px; margin-bottom: 16px;">${emoji}</div>
            <div style="font-size: 28px; font-weight: bold; color: #1a2a42; margin-bottom: 24px;">${text}</div>
            <button onclick="initGobang(); hideModal();" style="
                background: linear-gradient(135deg, #2b6cff, #1a56e0);
                color: #fff; border: none; padding: 12px 32px; border-radius: 8px;
                font-size: 16px; cursor: pointer; font-weight: bold;
            ">再来一局</button>
        </div>
    `;
    modal.style.display = 'flex';
}

function hideModal() {
    const modal = document.getElementById('gameModal');
    if (modal) modal.style.display = 'none';
}

// ===== 设置模式和难度 =====
function setGameMode(mode) {
    gameMode = mode;
    initGobang();
}

function setAiLevel(level) {
    aiLevel = level;
    if (gameMode === 'pve') initGobang();
}

/* ============================
   斗地主简易逻辑
   ============================ */
let myCards = [];
let robotCards = [];

function initDdz() {
    myCards = [];
    robotCards = [];
}

function ddzDeal() {
    alert('发牌完成！斗地主为简化演示版。');
}

function ddzPlay() {
    alert('出牌功能为演示版，完整斗地主逻辑后续可扩展。');
}

/* ============================
   页面加载初始化 + 注入动画样式
   ============================ */
window.onload = function () {
    // 注入CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes stoneDrop {
            from { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes popIn {
            from { transform: scale(0.5); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    initGobang();
    initDdz();

    // 绑定开始按钮
    const gobangStartBtn = document.getElementById('gobangStart');
    if (gobangStartBtn) gobangStartBtn.onclick = initGobang;

    // 绑定模式切换按钮（如果页面有这些ID）
    const pvpBtn = document.getElementById('modePvp');
    if (pvpBtn) pvpBtn.onclick = () => setGameMode('pvp');
    const pveBtn = document.getElementById('modePve');
    if (pveBtn) pveBtn.onclick = () => setGameMode('pve');

    // 绑定难度按钮
    const easyBtn = document.getElementById('levelEasy');
    if (easyBtn) easyBtn.onclick = () => setAiLevel('easy');
    const normalBtn = document.getElementById('levelNormal');
    if (normalBtn) normalBtn.onclick = () => setAiLevel('normal');
    const hardBtn = document.getElementById('levelHard');
    if (hardBtn) hardBtn.onclick = () => setAiLevel('hard');

    // 斗地主按钮
    const ddzDealBtn = document.getElementById('ddzDeal');
    if (ddzDealBtn) ddzDealBtn.onclick = ddzDeal;
    const ddzPlayBtn = document.getElementById('ddzPlay');
    if (ddzPlayBtn) ddzPlayBtn.onclick = ddzPlay;
};
