// ========== VARIÁVEIS GLOBAIS ==========
var clicks = 0;
var probability = 100;
var score = 0;
var total = 0;
var coins = 0;

// ========== SISTEMA DE SAVE/LOAD ==========
function saveGame() {
  const gameData = {
    total: total,
    score: score,
    coins: coins,
    achievements: achievements,
    unlockedItems: unlockedItems,
    equippedItems: equippedItems
  };
  localStorage.setItem('tryto100_save', JSON.stringify(gameData));
}

function loadGame() {
  const saved = localStorage.getItem('tryto100_save');
  if (saved) {
    const gameData = JSON.parse(saved);
    total = gameData.total || 0;
    score = gameData.score || 0;
    coins = gameData.coins || 0;

    if (gameData.achievements) {
      achievements = gameData.achievements;
    }
    if (gameData.unlockedItems) {
      unlockedItems = gameData.unlockedItems;
    }
    if (gameData.equippedItems) {
      equippedItems = gameData.equippedItems;
    }
  }
}

// ========== CONQUISTAS ==========
var achievements = [
  { id: 'first_click', name: 'Primeiro Passo', desc: 'Faça seu primeiro clique', reward: 10, unlocked: false, icon: '👆', requirement: () => total >= 1 },
  { id: 'clicks_10', name: 'Aquecendo', desc: 'Alcance 10 cliques totais', reward: 50, unlocked: false, icon: '🔥', requirement: () => total >= 10 },
  { id: 'clicks_100', name: 'Persistente', desc: 'Alcance 100 cliques totais', reward: 100, unlocked: false, icon: '💪', requirement: () => total >= 100 },
  { id: 'clicks_500', name: 'Dedicado', desc: 'Alcance 500 cliques totais', reward: 250, unlocked: false, icon: '⭐', requirement: () => total >= 500 },
  { id: 'clicks_1000', name: 'Milionário de Cliques', desc: 'Alcance 1000 cliques totais', reward: 500, unlocked: false, icon: '🎯', requirement: () => total >= 1000 },

  { id: 'score_10', name: 'Dez na Régua', desc: 'Alcance 10 cliques consecutivos', reward: 100, unlocked: false, icon: '🎲', requirement: () => score >= 10 },
  { id: 'score_25', name: 'Quartos de Final', desc: 'Alcance 25 cliques consecutivos', reward: 200, unlocked: false, icon: '🏅', requirement: () => score >= 25 },
  { id: 'score_50', name: 'Meio Caminho', desc: 'Alcance 50 cliques consecutivos', reward: 500, unlocked: false, icon: '🎖️', requirement: () => score >= 50 },
  { id: 'score_75', name: 'Quase Lá', desc: 'Alcance 75 cliques consecutivos', reward: 750, unlocked: false, icon: '👑', requirement: () => score >= 75 },
  { id: 'score_100', name: 'LENDÁRIO!', desc: 'Alcance 100 cliques consecutivos', reward: 2000, unlocked: false, icon: '🏆', requirement: () => score >= 100 },

  { id: 'collector', name: 'Colecionador', desc: 'Compre 5 itens diferentes', reward: 300, unlocked: false, icon: '🛍️', requirement: () => Object.keys(unlockedItems).length >= 5 },
  { id: 'rich', name: 'Rico', desc: 'Acumule 1000 moedas', reward: 100, unlocked: false, icon: '💰', requirement: () => coins >= 1000 }
];

function checkAchievements() {
  achievements.forEach(achievement => {
    if (!achievement.unlocked && achievement.requirement()) {
      achievement.unlocked = true;
      coins += achievement.reward;
      showAchievementNotification(achievement);
      updateCoinDisplay();
      saveGame();
    }
  });
}

function showAchievementNotification(achievement) {
  const notification = document.getElementById('achievementNotification');
  document.getElementById('achievementTitle').textContent = achievement.icon + ' ' + achievement.name;
  document.getElementById('achievementDesc').textContent = achievement.desc;
  document.getElementById('achievementReward').textContent = '+' + achievement.reward + ' moedas';

  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 4000);
}

// ========== LOJA ==========
var shopItems = {
  colors: [
    { id: 'color_default', name: 'Azul Clássico', price: 0, color: '#3498db', unlocked: true },
    { id: 'color_red', name: 'Vermelho Fogo', price: 100, color: '#e74c3c', unlocked: false },
    { id: 'color_green', name: 'Verde Neon', price: 100, color: '#2ecc71', unlocked: false },
    { id: 'color_purple', name: 'Roxo Místico', price: 150, color: '#9b59b6', unlocked: false },
    { id: 'color_gold', name: 'Ouro Real', price: 300, color: '#f39c12', unlocked: false },
    { id: 'color_pink', name: 'Rosa Sakura', price: 200, color: '#ff69b4', unlocked: false },
    { id: 'color_cyan', name: 'Ciano Elétrico', price: 250, color: '#00d9ff', unlocked: false },
    { id: 'color_rainbow', name: 'Arco-Íris', price: 500, color: 'rainbow', unlocked: false }
  ],
  powerups: [
    { id: 'powerup_double_jump', name: 'Pulo Duplo', desc: 'Próximo clique bem-sucedido pula +1', price: 150, uses: 0 },
    { id: 'powerup_triple_jump', name: 'Pulo Triplo', desc: 'Próximo clique bem-sucedido pula +2', price: 300, uses: 0 },
    { id: 'powerup_shield', name: 'Escudo', desc: 'Proteção contra 1 falha', price: 200, uses: 0 },
    { id: 'powerup_luck', name: 'Trevo da Sorte', desc: '+10% de chance por 10 cliques', price: 250, uses: 0 },
    { id: 'powerup_slow_decay', name: 'Decaimento Lento', desc: 'Probabilidade cai 0.5% por 20 cliques', price: 350, uses: 0 }
  ],
  backgrounds: [
    { id: 'bg_none', name: 'Sem Efeito', price: 0, effect: 'none', unlocked: true },
    { id: 'bg_stars', name: 'Estrelas Cadentes', price: 200, effect: 'stars', unlocked: false },
    { id: 'bg_bubbles', name: 'Bolhas Flutuantes', price: 200, effect: 'bubbles', unlocked: false },
    { id: 'bg_matrix', name: 'Matrix Code', price: 300, effect: 'matrix', unlocked: false },
    { id: 'bg_particles', name: 'Partículas Mágicas', price: 250, effect: 'particles', unlocked: false }
  ]
};

var unlockedItems = {
  color_default: true,
  bg_none: true
};

var equippedItems = {
  color: 'color_default',
  background: 'bg_none'
};

var activePowerups = {
  double_jump: 0,
  triple_jump: 0,
  shield: 0,
  luck: { active: false, remaining: 0 },
  slow_decay: { active: false, remaining: 0 }
};

function buyItem(itemType, itemId) {
  let item;

  if (itemType === 'color') {
    item = shopItems.colors.find(i => i.id === itemId);
  } else if (itemType === 'powerup') {
    item = shopItems.powerups.find(i => i.id === itemId);
  } else if (itemType === 'background') {
    item = shopItems.backgrounds.find(i => i.id === itemId);
  }

  if (!item) return;

  if (coins >= item.price) {
    coins -= item.price;

    if (itemType === 'powerup') {
      if (!item.uses) item.uses = 0;
      item.uses++;
    } else {
      unlockedItems[itemId] = true;
    }

    updateCoinDisplay();
    saveGame();
    renderShop();
    checkAchievements();
  } else {
    alert('Moedas insuficientes!');
  }
}

function equipItem(itemType, itemId) {
  if (!unlockedItems[itemId]) return;

  equippedItems[itemType] = itemId;

  if (itemType === 'color') {
    applyButtonColor();
  } else if (itemType === 'background') {
    applyBackgroundEffect();
  }

  saveGame();
  renderShop();
}

function usePowerup(powerupId) {
  const powerup = shopItems.powerups.find(p => p.id === powerupId);
  if (!powerup || powerup.uses <= 0) return;

  powerup.uses--;

  if (powerupId === 'powerup_double_jump') {
    activePowerups.double_jump++;
  } else if (powerupId === 'powerup_triple_jump') {
    activePowerups.triple_jump++;
  } else if (powerupId === 'powerup_shield') {
    activePowerups.shield++;
  } else if (powerupId === 'powerup_luck') {
    activePowerups.luck = { active: true, remaining: 10 };
  } else if (powerupId === 'powerup_slow_decay') {
    activePowerups.slow_decay = { active: true, remaining: 20 };
  }

  updateActivePowerupsDisplay();
  saveGame();
  renderShop();
}

function applyButtonColor() {
  const colorItem = shopItems.colors.find(c => c.id === equippedItems.color);
  if (!colorItem) return;

  const button = document.getElementById('clickButton');

  if (colorItem.color === 'rainbow') {
    button.style.background = 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)';
    button.style.backgroundSize = '400% 400%';
    button.style.animation = 'rainbow 3s ease infinite';
  } else {
    button.style.background = colorItem.color;
    button.style.animation = '';
  }
}

function applyBackgroundEffect() {
  const bgContainer = document.getElementById('backgroundParticles');
  bgContainer.innerHTML = '';

  const bgItem = shopItems.backgrounds.find(b => b.id === equippedItems.background);
  if (!bgItem || bgItem.effect === 'none') return;

  if (bgItem.effect === 'stars') {
    createStarsEffect(bgContainer);
  } else if (bgItem.effect === 'bubbles') {
    createBubblesEffect(bgContainer);
  } else if (bgItem.effect === 'matrix') {
    createMatrixEffect(bgContainer);
  } else if (bgItem.effect === 'particles') {
    createParticlesEffect(bgContainer);
  }
}

function createStarsEffect(container) {
  for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    container.appendChild(star);
  }
}

function createBubblesEffect(container) {
  setInterval(() => {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = Math.random() * 100 + '%';
    bubble.style.width = bubble.style.height = (Math.random() * 50 + 20) + 'px';
    bubble.style.animationDuration = (Math.random() * 3 + 4) + 's';
    container.appendChild(bubble);

    setTimeout(() => bubble.remove(), 7000);
  }, 500);
}

function createMatrixEffect(container) {
  const canvas = document.createElement('canvas');
  canvas.className = 'matrix-canvas';
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  container.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const chars = '01';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = [];

  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
  }

  function drawMatrix() {
    ctx.fillStyle = 'rgba(80, 177, 241, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0f0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);
}

function createParticlesEffect(container) {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'magic-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 5 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    container.appendChild(particle);
  }
}

function updateActivePowerupsDisplay() {
  const container = document.getElementById('activePowerups');
  container.innerHTML = '';

  if (activePowerups.double_jump > 0) {
    container.innerHTML += `<span class="powerup-badge">⏭️ Pulo x2: ${activePowerups.double_jump}</span>`;
  }
  if (activePowerups.triple_jump > 0) {
    container.innerHTML += `<span class="powerup-badge">⏭️⏭️ Pulo x3: ${activePowerups.triple_jump}</span>`;
  }
  if (activePowerups.shield > 0) {
    container.innerHTML += `<span class="powerup-badge">🛡️ Escudo: ${activePowerups.shield}</span>`;
  }
  if (activePowerups.luck.active) {
    container.innerHTML += `<span class="powerup-badge">🍀 Sorte: ${activePowerups.luck.remaining}</span>`;
  }
  if (activePowerups.slow_decay.active) {
    container.innerHTML += `<span class="powerup-badge">⏱️ Lento: ${activePowerups.slow_decay.remaining}</span>`;
  }
}

// ========== UI FUNCTIONS ==========
function startGame() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('topMenu').style.display = 'flex';
  document.getElementById('gameHUD').style.display = 'block';
  document.getElementById('clickButton').style.display = 'flex';
  document.getElementById('clickButtonShadow1').style.display = 'flex';
  document.getElementById('clickButtonShadow2').style.display = 'flex';
  document.getElementById('clickButtonShadow3').style.display = 'flex';

  loadGame();
  updateCoinDisplay();
  updateGameDisplay();
  applyButtonColor();
  applyBackgroundEffect();
}

function openShop() {
  document.getElementById('shopModal').style.display = 'flex';
  renderShop();
}

function closeShop() {
  document.getElementById('shopModal').style.display = 'none';
}

function openAchievements() {
  document.getElementById('achievementsModal').style.display = 'flex';
  renderAchievements();
}

function closeAchievements() {
  document.getElementById('achievementsModal').style.display = 'none';
}

function renderShop() {
  // Renderizar cores
  const colorShop = document.getElementById('colorShop');
  colorShop.innerHTML = '';

  shopItems.colors.forEach(item => {
    const card = document.createElement('div');
    card.className = 'shop-item';

    const isUnlocked = unlockedItems[item.id];
    const isEquipped = equippedItems.color === item.id;

    let buttonHTML = '';
    if (isEquipped) {
      buttonHTML = '<button class="shop-btn equipped">EQUIPADO</button>';
    } else if (isUnlocked) {
      buttonHTML = `<button class="shop-btn" onclick="equipItem('color', '${item.id}')">EQUIPAR</button>`;
    } else {
      buttonHTML = `<button class="shop-btn" onclick="buyItem('color', '${item.id}')">COMPRAR ${item.price} 💰</button>`;
    }

    const colorPreview = item.color === 'rainbow'
      ? 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)'
      : item.color;

    card.innerHTML = `
      <div class="color-preview" style="background: ${colorPreview}"></div>
      <h4>${item.name}</h4>
      ${buttonHTML}
    `;
    colorShop.appendChild(card);
  });

  // Renderizar power-ups
  const powerupShop = document.getElementById('powerupShop');
  powerupShop.innerHTML = '';

  shopItems.powerups.forEach(item => {
    const card = document.createElement('div');
    card.className = 'shop-item';

    card.innerHTML = `
      <h4>${item.name}</h4>
      <p class="shop-desc">${item.desc}</p>
      <p class="shop-stock">Estoque: ${item.uses || 0}</p>
      <button class="shop-btn" onclick="buyItem('powerup', '${item.id}')">COMPRAR ${item.price} 💰</button>
      ${item.uses > 0 ? `<button class="shop-btn use-btn" onclick="usePowerup('${item.id}')">USAR</button>` : ''}
    `;
    powerupShop.appendChild(card);
  });

  // Renderizar backgrounds
  const backgroundShop = document.getElementById('backgroundShop');
  backgroundShop.innerHTML = '';

  shopItems.backgrounds.forEach(item => {
    const card = document.createElement('div');
    card.className = 'shop-item';

    const isUnlocked = unlockedItems[item.id];
    const isEquipped = equippedItems.background === item.id;

    let buttonHTML = '';
    if (isEquipped) {
      buttonHTML = '<button class="shop-btn equipped">EQUIPADO</button>';
    } else if (isUnlocked) {
      buttonHTML = `<button class="shop-btn" onclick="equipItem('background', '${item.id}')">EQUIPAR</button>`;
    } else {
      buttonHTML = `<button class="shop-btn" onclick="buyItem('background', '${item.id}')">COMPRAR ${item.price} 💰</button>`;
    }

    card.innerHTML = `
      <h4>${item.name}</h4>
      ${buttonHTML}
    `;
    backgroundShop.appendChild(card);
  });
}

function renderAchievements() {
  const list = document.getElementById('achievementsList');
  list.innerHTML = '';

  achievements.forEach(achievement => {
    const card = document.createElement('div');
    card.className = 'achievement-item ' + (achievement.unlocked ? 'unlocked' : 'locked');

    card.innerHTML = `
      <div class="achievement-icon-large">${achievement.icon}</div>
      <div class="achievement-info">
        <h4>${achievement.name}</h4>
        <p>${achievement.desc}</p>
        <p class="achievement-reward">Recompensa: ${achievement.reward} 💰</p>
      </div>
      <div class="achievement-status">
        ${achievement.unlocked ? '✅' : '🔒'}
      </div>
    `;
    list.appendChild(card);
  });
}

function updateCoinDisplay() {
  document.getElementById('coinDisplay').textContent = coins;
}

function updateGameDisplay() {
  document.getElementById('score').innerHTML = "Score: " + score;
  document.getElementById('total').innerHTML = "clicks (total): " + total;
}

// ========== MECÂNICA DO JOGO ==========
function subtitle(sub){
  var leg = document.getElementById("subs");
  leg.style.opacity = 0;
  leg.innerHTML = sub;
  leg.style.opacity = 1;
}

function clicker(){
  total += 1;
  coins += 1; // Ganha 1 moeda por clique

  updateCoinDisplay();
  document.getElementById("total").innerHTML = "clicks (total): " + total;

  // Mensagens filosóficas
  if (total === 10) {
    subtitle("Por que você continua clicando? O que espera alcançar?");
  } else if (total === 20) {
    subtitle("Você já se perguntou por que está fazendo isso?");
  } else if (total === 30) {
    subtitle("Trinta cliques... Qual é o propósito disso?");
  } else if (total === 40) {
    subtitle("Será que há um significado oculto em tudo isso?");
  } else if (total === 50) {
    subtitle("Cinquenta cliques depois, você encontrou respostas?");
  } else if (total === 60) {
    subtitle("Os cliques continuam... Mas o sentido está se perdendo?");
  } else if (total === 70) {
    subtitle("Setenta cliques. A mente se agita em busca de clareza.");
  } else if (total === 80) {
    subtitle("A repetição incessante... Ou é você que está mudando?");
  } else if (total === 90) {
    subtitle("Noventa cliques. A jornada ou o desespero?");
  } else if (total === 100) {
    subtitle("Cem cliques. Um ciclo infindável ou uma jornada?");
  } else if (total === 110) {
    subtitle("Por que persistir? A resposta está à frente ou além?");
  } else if (total === 120) {
    subtitle("Os cliques continuam, mas a razão se esconde nas sombras.");
  } else if (total === 130) {
    subtitle("Cento e trinta cliques. O que você busca nessa repetição?");
  } else if (total === 140) {
    subtitle("Quando a realidade se transforma em cliques incessantes.");
  } else if (total === 150) {
    subtitle("Cento e cinquenta cliques. O caminho para a compreensão?");
  } else if (total === 200) {
    subtitle("Duzentos cliques. A busca pela verdade continua.");
  } else if (total === 250) {
    subtitle("Duzentos e cinquenta cliques. E o que você encontrou?");
  } else if (total === 300) {
    subtitle("Trezentos cliques. Um caminho iluminado ou uma trilha obscura?");
  } else if (total === 500) {
    subtitle("Quinhentos cliques. Apenas ruído ou uma mensagem oculta?");
  } else if (total === 750) {
    subtitle("Cada clique é uma peça de um quebra-cabeça inacabado.");
  } else if (total === 1000) {
    subtitle("Mil cliques. Estou sem ideia pra mais frases, agora enlouqueça sozinho aí");
  }

  // Mecânica de probabilidade
  if (probability > 0) {
    console.log(`Probabilidade atual: ${probability}%`);

    let currentProbability = probability;

    // Aplicar bônus de sorte
    if (activePowerups.luck.active) {
      currentProbability += 10;
      activePowerups.luck.remaining--;
      if (activePowerups.luck.remaining <= 0) {
        activePowerups.luck.active = false;
      }
      updateActivePowerupsDisplay();
    }

    const result = Math.floor(Math.random() * 100) + 1;

    if (result <= currentProbability) {
      // Clique bem-sucedido
      let clicksToAdd = 1;

      // Aplicar pulos
      if (activePowerups.triple_jump > 0) {
        clicksToAdd = 3;
        activePowerups.triple_jump--;
        updateActivePowerupsDisplay();
      } else if (activePowerups.double_jump > 0) {
        clicksToAdd = 2;
        activePowerups.double_jump--;
        updateActivePowerupsDisplay();
      }

      clicks += clicksToAdd;

    } else {
      // Clique falhou
      if (activePowerups.shield > 0) {
        // Escudo absorve a falha
        activePowerups.shield--;
        updateActivePowerupsDisplay();
        subtitle("🛡️ Escudo te protegeu!");
      } else {
        // Reset
        clicks = 0;
        probability = 100;
      }
    }

    if (clicks > score) {
      score = clicks;
      document.getElementById("score").innerHTML = "Score: " + score;
    }

    // Decaimento de probabilidade
    let decayAmount = 1;
    if (activePowerups.slow_decay.active) {
      decayAmount = 0.5;
      activePowerups.slow_decay.remaining--;
      if (activePowerups.slow_decay.remaining <= 0) {
        activePowerups.slow_decay.active = false;
      }
      updateActivePowerupsDisplay();
    }

    probability -= decayAmount;
    document.getElementById("counter").innerHTML = clicks + "";
  }

  checkAchievements();
  saveGame();
}

// Inicializar ao carregar a página
window.addEventListener('load', () => {
  loadGame();
});
