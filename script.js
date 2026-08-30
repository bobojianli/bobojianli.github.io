/* ============================
   五子棋完整逻辑（含AI三难度+特效+弹窗）
   ============================ */

// ===== 全局变量 =====
let chessBoard = [];
let isBlackTurn = true;
let gameOver = false;
let gameMode = 'pve';
let aiLevel = 'easy';
let boardSize = 15;

// ===== 弹窗控制（页面加载完成后执行）=====
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('gobangModal');
    var startBtn = document.getElementById('gobangStart');
    var closeBtn = document.getElementById('gobangClose');
    if (startBtn) {
        startBtn.onclick = function () { modal.style.display = 'flex'; };
    }
    if (closeBtn) {
        closeBtn.onclick = function () { modal.style.display = 'none'; };
    }
    var diffBtns = document.querySelectorAll('.diff-btn');
    for (var i = 0; i < diffBtns.length; i++) {
        diffBtns[i].onclick = function () {
            var lv = this.getAttribute('data-level');
            initGobang(lv);
        };
    }
});

// ===== 初始化棋盘 =====
function initGobang(level) {
    if (level) aiLevel = level;
    chessBoard = Array(boardSize).fill().map(function () { return Array(boardSize).fill(0); });
    isBlackTurn = true;
    gameOver = false;
    var boardDom = document.getElementById('gobangBoard');
    if (!boardDom) return;
    boardDom.innerHTML = '';
    boardDom.style.cssText = 'display:grid;grid-template-columns:repeat(' + boardSize + ',1fr);gap:0;aspect-ratio:1;background:#e8c88a;padding:10px;border-radius:8px;position:relative;';
    for (var y = 0; y < boardSize; y++) {
        for (var x = 0; x < boardSize; x++) {
            var cell = document.createElement('div');
            cell.className = 'gobang-cell';
            cell.setAttribute('data-x', x);
            cell.setAttribute('data-y', y);
            cell.style.cssText = 'position:relative;width:100%;padding-bottom:100%;cursor:pointer;border:0.5px solid #b8956a;box-sizing:border-box;';
            cell.onclick = (function (cx, cy) {
                return function () { clickChess(cx, cy); };
            })(x, y);
            boardDom.appendChild(cell);
        }
    }
    hideModal();
}

// ===== 玩家落子 =====
function clickChess(x, y) {
    if (gameOver) return;
    if (chessBoard[y][x] !== 0) return;
    if (gameMode === 'pve' && !isBlackTurn) return;
    placeStone(x, y, 1);
    if (checkWin(x, y)) {
        gameOver = true;
        triggerWinEffect(x, y);
        setTimeout(function () { showModal('你赢了！', '🎉'); }, 600);
        return;
    }
    isBlackTurn = false;
    if (gameMode === 'pve' && !gameOver) {
        setTimeout(function () { aiMove(); }, 400);
    }
}

// ===== 放置棋子 =====
function placeStone(x, y, color) {
    chessBoard[y][x] = color;
    var boardDom = document.getElementById('gobangBoard');
    if (!boardDom) return;
    var cells = boardDom.querySelectorAll('.gobang-cell');
    var idx = y * boardSize + x;
    var dot = document.createElement('div');
    var isBlack = color === 1;
    dot.style.cssText = 'position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80%;height:80%;border-radius:50%;background:' + (isBlack ? 'radial-gradient(circle at 30% 30%,#555,#000)' : 'radial-gradient(circle at 30% 30%,#fff,#ccc)') + ';box-shadow:' + (isBlack ? '0 2px 4px rgba(0,0,0,0.5)' : '0 2px 4px rgba(0,0,0,0.3)') + ';animation:stoneDrop 0.2s ease-out;';
    cells[idx].appendChild(dot);
}

// ===== 胜负判断 =====
function checkWin(x, y) {
    var self = chessBoard[y][x];
    var dirs = [[1, 0], [0, 1], [1, 1], [1, -1]];
    for (var d = 0; d < dirs.length; d++) {
        var dx = dirs[d][0], dy = dirs[d][1];
        var count = 1;
        for (var i = 1; i < 5; i++) {
            var nx = x + dx * i, ny = y + dy * i;
            if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize && chessBoard[ny][nx] === self) count++;
            else break;
        }
        for (var j = 1; j < 5; j++) {
            var nx2 = x - dx * j, ny2 = y - dy * j;
            if (nx2 >= 0 && nx2 < boardSize && ny2 >= 0 && ny2 < boardSize && chessBoard[ny2][nx2] === self) count++;
            else break;
        }
        if (count >= 5) return true;
    }
    return false;
}

// ===== AI落子（三难度）=====
function aiMove() {
    if (gameOver) return;
    var move;
    if (aiLevel === 'easy') move = aiEasy();
    else if (aiLevel === 'normal') move = aiNormal();
    else move = aiHard();
    if (!move) return;
    placeStone(move.x, move.y, 2);
    if (checkWin(move.x, move.y)) {
        gameOver = true;
        triggerWinEffect(move.x, move.y);
        setTimeout(function () { showModal('AI赢了！', '😢'); }, 600);
        return;
    }
    isBlackTurn = true;
}

function aiEasy() {
    var empty = getEmptyCells();
    if (empty.length === 0) return null;
    if (Math.random() < 0.3) {
        var block = findBlockMove(1, 3);
        if (block) return block;
    }
    return empty[Math.floor(Math.random() * empty.length)];
}

function aiNormal() {
    var win = findWinMove(2);
    if (win) return win;
    var block4 = findBlockMove(1, 4);
    if (block4) return block4;
    var block3 = findBlockMove(1, 3);
    if (block3) return block3;
    var attack = findBlockMove(2, 3);
    if (attack) return attack;
    return getCenterRandom();
}

function aiHard() {
    var win = findWinMove(2);
    if (win) return win;
    var block4 = findBlockMove(1, 4);
    if (block4) return block4;
    var block3 = findBlockMove(1, 3);
    if (block3) return block3;
    var bestScore = -1;
    var bestMove = null;
    var empty = getEmptyCells();
    for (var i = 0; i < empty.length; i++) {
        var score = evaluatePosition(empty[i].x, empty[i].y);
        if (score > bestScore) {
            bestScore = score;
            bestMove = empty[i];
        }
    }
    return bestMove || getCenterRandom();
}

function evaluatePosition(x, y) {
    var score = 0;
    chessBoard[y][x] = 2;
    score += countLine(x, y, 2) * 10;
    chessBoard[y][x] = 0;
    chessBoard[y][x] = 1;
    score += countLine(x, y, 1) * 8;
    chessBoard[y][x] = 0;
    score += (7 - Math.abs(x - 7)) + (7 - Math.abs(y - 7));
    return score;
}

function countLine(x, y, color) {
    var dirs = [[1, 0], [0, 1], [1, 1], [1, -1]];
    var total = 0;
    for (var d = 0; d < dirs.length; d++) {
        var dx = dirs[d][0], dy = dirs[d][1];
        var count = 1;
        for (var i = 1; i < 5; i++) {
            var nx = x + dx * i, ny = y + dy * i;
            if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize && chessBoard[ny][nx] === color) count++;
            else break;
        }
        for (var j = 1; j < 5; j++) {
            var nx2 = x - dx * j, ny2 = y - dy * j;
            if (nx2 >= 0 && nx2 < boardSize && ny2 >= 0 && ny2 < boardSize && chessBoard[ny2][nx2] === color) count++;
            else break;
        }
        total += count;
    }
    return total;
}

// ===== 辅助函数 =====
function getEmptyCells() {
    var cells = [];
    for (var y = 0; y < boardSize; y++) {
        for (var x = 0; x < boardSize; x++) {
            if (chessBoard[y][x] === 0) cells.push({ x: x, y: y });
        }
    }
    return cells;
}

function getCenterRandom() {
    var empty = getEmptyCells().filter(function (c) { return Math.abs(c.x - 7) <= 5 && Math.abs(c.y - 7) <= 5; });
    var pool = empty.length > 0 ? empty : getEmptyCells();
    return pool[Math.floor(Math.random() * pool.length)];
}

function findWinMove(color) {
    var empty = getEmptyCells();
    for (var i = 0; i < empty.length; i++) {
        var cell = empty[i];
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
    var empty = getEmptyCells();
    for (var i = 0; i < empty.length; i++) {
        var cell = empty[i];
        chessBoard[cell.y][cell.x] = color;
        if (countLine(cell.x, cell.y, color) >= length * 2) {
            chessBoard[cell.y][cell.x] = 0;
            return cell;
        }
        chessBoard[cell.y][cell.x] = 0;
    }
    return null;
}

// ===== 胜利特效 =====
function triggerWinEffect(x, y) {
    var boardDom = document.getElementById('gobangBoard');
    if (!boardDom) return;
    var count = 0;
    var flash = setInterval(function () {
        boardDom.style.boxShadow = count % 2 === 0 ? '0 0 30px 10px rgba(255,215,0,0.8)' : '0 0 0 0 transparent';
        count++;
        if (count > 6) clearInterval(flash);
    }, 150);
}

// ===== 弹窗 =====
function showModal(text, emoji) {
    var modal = document.getElementById('gobangModal');
    if (!modal) return;
    var inner = modal.querySelector('div');
    if (inner) {
        inner.innerHTML = '<div style="font-size:60px;margin-bottom:16px;">' + emoji + '</div><div style="font-size:28px;font-weight:bold;color:#1a2a42;margin-bottom:24px;">' + text + '</div><button onclick="initGobang();" style="background:linear-gradient(135deg,#2b6cff,#1a56e0);color:#fff;border:none;padding:12px 32px;border-radius:8px;font-size:16px;cursor:pointer;font-weight:bold;">再来一局</button>';
    }
    modal.style.display = 'flex';
}

function hideModal() {
    // 保留弹窗显示，不隐藏
}

// ===== 注入CSS动画 =====
var style = document.createElement('style');
style.textContent = '@keyframes stoneDrop{from{transform:translate(-50%,-50%) scale(0);opacity:0;}to{transform:translate(-50%,-50%) scale(1);opacity:1;}}';
document.head.appendChild(style);
