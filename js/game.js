(function () {
  "use strict";
  var cv = document.getElementById("g-canvas");
  if (!cv) return;
  var t = window.t || function (x) { return x; };
  var ctx = cv.getContext("2d");
  var N = 20;
  var LABELS = ["HTML", "CSS", "JS", "TG", "D1", "Java", "SQL", "Git"];
  var scoreEl = document.getElementById("g-score");
  var bestEl = document.getElementById("g-best");
  var overlay = document.getElementById("g-overlay");
  var titleEl = document.getElementById("g-title");
  var textEl = document.getElementById("g-text");
  var btn = document.getElementById("g-btn");

  var snake, dir, queue, food, score, best = 0, state = "idle", last = 0, acc = 0, step = 140;
  try { best = parseInt(localStorage.getItem("gws-snake-best"), 10) || 0; } catch (e) {}
  bestEl.textContent = best;

  // подписи в оверлее
  var HINT = "Управление: стрелки или WASD, пробел для паузы. На телефоне свайп по полю.";
  titleEl.textContent = t("Змейка");
  textEl.textContent = t(HINT);
  btn.textContent = t("Играть");
  document.querySelectorAll(".game-bar i").forEach(function (i) { i.textContent = t(i.textContent); });

  function fit() {
    var w = cv.clientWidth || 600;
    var r = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = cv.height = Math.round(w * r);
    draw();
  }

  function placeFood() {
    var free = [];
    for (var x = 0; x < N; x++) for (var y = 0; y < N; y++) {
      if (!snake.some(function (s) { return s.x === x && s.y === y; })) free.push({ x: x, y: y });
    }
    var c = free[Math.floor(Math.random() * free.length)];
    food = { x: c.x, y: c.y, label: LABELS[Math.floor(Math.random() * LABELS.length)] };
  }

  function reset() {
    snake = [{ x: 8, y: 10 }, { x: 7, y: 10 }, { x: 6, y: 10 }];
    dir = { x: 1, y: 0 };
    queue = [];
    score = 0;
    step = 140;
    scoreEl.textContent = 0;
    placeFood();
  }

  function setDir(nx, ny) {
    var ref = queue.length ? queue[queue.length - 1] : dir;
    if (nx === -ref.x && ny === -ref.y) return;
    if (nx === ref.x && ny === ref.y) return;
    if (queue.length < 2) queue.push({ x: nx, y: ny });
  }

  function show(title, text, label) {
    titleEl.textContent = title;
    textEl.textContent = text;
    btn.textContent = label;
    overlay.classList.add("on");
  }

  function start() {
    reset();
    state = "run";
    overlay.classList.remove("on");
    last = 0; acc = 0;
    requestAnimationFrame(loop);
  }

  function pause() {
    if (state === "run") { state = "pause"; show(t("Пауза"), "", t("Продолжить")); }
  }
  function resume() {
    if (state === "pause") { state = "run"; overlay.classList.remove("on"); last = 0; requestAnimationFrame(loop); }
  }

  function over() {
    state = "over";
    if (score > best) {
      best = score;
      bestEl.textContent = best;
      try { localStorage.setItem("gws-snake-best", String(best)); } catch (e) {}
    }
    show(t("Игра окончена"), t("Счёт") + ": " + score + " · " + t("Рекорд") + ": " + best, t("Ещё раз"));
  }

  function tick() {
    if (queue.length) dir = queue.shift();
    var h = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };
    var eat = h.x === food.x && h.y === food.y;
    var body = eat ? snake : snake.slice(0, -1);
    if (h.x < 0 || h.y < 0 || h.x >= N || h.y >= N || body.some(function (s) { return s.x === h.x && s.y === h.y; })) return over();
    snake.unshift(h);
    if (eat) {
      score++;
      scoreEl.textContent = score;
      step = Math.max(70, step - 3);
      if (snake.length >= N * N) return over();
      placeFood();
    } else snake.pop();
  }

  function loop(ts) {
    if (state !== "run") return;
    if (!last) last = ts;
    acc += ts - last;
    last = ts;
    while (acc >= step && state === "run") { acc -= step; tick(); }
    draw();
    if (state === "run") requestAnimationFrame(loop);
  }

  function rr(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function draw() {
    var W = cv.width, c = W / N;
    ctx.clearRect(0, 0, W, W);
    ctx.fillStyle = "#07080d";
    ctx.fillRect(0, 0, W, W);
    ctx.strokeStyle = "rgba(255,255,255,.04)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (var i = 1; i < N; i++) { ctx.moveTo(i * c, 0); ctx.lineTo(i * c, W); ctx.moveTo(0, i * c); ctx.lineTo(W, i * c); }
    ctx.stroke();
    if (!snake) return;

    // еда: белая плашка с названием технологии
    var p = c * 0.08;
    ctx.save();
    ctx.shadowColor = "rgba(34,160,254,.7)";
    ctx.shadowBlur = c * 0.6;
    ctx.fillStyle = "#f4f7ff";
    rr(food.x * c + p, food.y * c + p, c - p * 2, c - p * 2, c * 0.22);
    ctx.fill();
    ctx.restore();
    ctx.fillStyle = "#050507";
    ctx.font = "800 " + Math.floor(c * (food.label.length > 3 ? 0.3 : 0.4)) + "px Unbounded, Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(food.label, food.x * c + c / 2, food.y * c + c / 2 + c * 0.02);

    // змейка: от яркого синего к тёмному
    for (var k = snake.length - 1; k >= 0; k--) {
      var s = snake[k], a = 1 - (k / Math.max(snake.length, 8)) * 0.55;
      ctx.fillStyle = "rgba(34,160," + Math.round(254 * a) + "," + (0.55 + a * 0.45) + ")";
      if (k === 0) { ctx.save(); ctx.shadowColor = "rgba(34,160,254,.8)"; ctx.shadowBlur = c * 0.5; }
      rr(s.x * c + c * 0.06, s.y * c + c * 0.06, c * 0.88, c * 0.88, c * 0.28);
      ctx.fill();
      if (k === 0) ctx.restore();
    }
    // глаза
    var hd = snake[0], ex = dir.x, ey = dir.y, ox = -ey, oy = ex;
    ctx.fillStyle = "#050507";
    [-1, 1].forEach(function (sd) {
      ctx.beginPath();
      ctx.arc(hd.x * c + c / 2 + ex * c * 0.18 + ox * sd * c * 0.2, hd.y * c + c / 2 + ey * c * 0.18 + oy * sd * c * 0.2, c * 0.07, 0, 7);
      ctx.fill();
    });
  }

  var KEYS = { ArrowUp: [0, -1], w: [0, -1], W: [0, -1], ArrowDown: [0, 1], s: [0, 1], S: [0, 1], ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0], ArrowRight: [1, 0], d: [1, 0], D: [1, 0] };
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var tg = e.target && e.target.nodeName;
    if (tg === "INPUT" || tg === "TEXTAREA") return;
    if (KEYS[e.key]) {
      if (state === "run") { e.preventDefault(); setDir(KEYS[e.key][0], KEYS[e.key][1]); }
      else if (state === "idle" || state === "over") { if (e.key.indexOf("Arrow") === 0) e.preventDefault(); }
    } else if (e.key === " " && (tg !== "BUTTON" || e.target === btn)) {
      e.preventDefault();
      if (state === "run") pause(); else if (state === "pause") resume(); else start();
    }
  });

  btn.addEventListener("click", function () { btn.blur(); if (state === "pause") resume(); else start(); });
  document.querySelectorAll(".dpad button").forEach(function (b) {
    b.addEventListener("click", function () {
      var m = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[b.getAttribute("data-d")];
      if (state === "run") setDir(m[0], m[1]);
    });
  });

  // свайпы по полю
  var sx = 0, sy = 0;
  cv.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  cv.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24 || state !== "run") return;
    if (Math.abs(dx) > Math.abs(dy)) setDir(dx > 0 ? 1 : -1, 0); else setDir(0, dy > 0 ? 1 : -1);
  }, { passive: true });

  document.addEventListener("visibilitychange", function () { if (document.hidden) pause(); });
  window.addEventListener("blur", pause);
  window.addEventListener("resize", fit);
  overlay.classList.add("on");
  fit();
})();
