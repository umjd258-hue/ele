"use strict";

const BACKGROUND_ASSETS = Object.freeze([
  "bg_b1_parking_01.webp",
  "bg_b1_parking_02.webp",
  "bg_b1_parking_03.webp",
  "bg_b1_parking_04.webp",
  "bg_b1_parking_05.webp",
  "bg_1f_toys_01.webp",
  "bg_1f_toys_02.webp",
  "bg_1f_toys_03.webp",
  "bg_1f_toys_04.webp",
  "bg_1f_toys_05.webp",
  "bg_2f_trains_01.webp",
  "bg_2f_trains_02.webp",
  "bg_2f_trains_03.webp",
  "bg_2f_trains_04.webp",
  "bg_2f_trains_05.webp",
  "bg_3f_zoo_01.webp",
  "bg_3f_zoo_02.webp",
  "bg_3f_zoo_03.webp",
  "bg_3f_zoo_04.webp",
  "bg_3f_zoo_05.webp",
  "bg_4f_aquarium_01.webp",
  "bg_4f_aquarium_02.webp",
  "bg_4f_aquarium_03.webp",
  "bg_4f_aquarium_04.webp",
  "bg_4f_aquarium_05.webp",
  "bg_5f_work_vehicles_01.webp",
  "bg_5f_work_vehicles_02.webp",
  "bg_5f_work_vehicles_03.webp",
  "bg_5f_work_vehicles_04.webp",
  "bg_5f_work_vehicles_05.webp",
  "bg_6f_railroad_crossings_01.webp",
  "bg_6f_railroad_crossings_02.webp",
  "bg_6f_railroad_crossings_03.webp",
  "bg_6f_railroad_crossings_04.webp",
  "bg_6f_railroad_crossings_05.webp",
  "bg_7f_playground_01.webp",
  "bg_7f_playground_02.webp",
  "bg_7f_playground_03.webp",
  "bg_7f_playground_04.webp",
  "bg_7f_playground_05.webp",
  "bg_8f_amusement_park_01.webp",
  "bg_8f_amusement_park_02.webp",
  "bg_8f_amusement_park_03.webp",
  "bg_8f_amusement_park_04.webp",
  "bg_8f_amusement_park_05.webp",
  "bg_9f_sky_aircraft_01.webp",
  "bg_9f_sky_aircraft_02.webp",
  "bg_9f_sky_aircraft_03.webp",
  "bg_9f_sky_aircraft_04.webp",
  "bg_9f_sky_aircraft_05.webp",
  "bg_10f_weather_01.webp",
  "bg_10f_weather_02.webp",
  "bg_10f_weather_03.webp",
  "bg_10f_weather_04.webp",
  "bg_10f_weather_05.webp"
]);

const TARGET_ASSETS = Object.freeze([
  "target_b1_passenger_car.webp",
  "target_b1_bus.webp",
  "target_b1_motorcycle.webp",
  "target_b1_truck.webp",
  "target_b1_taxi.webp",
  "target_1f_blocks.webp",
  "target_1f_ball.webp",
  "target_1f_plush_toy.webp",
  "target_1f_robot.webp",
  "target_1f_rocking_horse.webp",
  "target_2f_shinkansen.webp",
  "target_2f_steam_locomotive.webp",
  "target_2f_commuter_train.webp",
  "target_2f_monorail.webp",
  "target_2f_freight_train.webp",
  "target_3f_elephant.webp",
  "target_3f_lion.webp",
  "target_3f_giraffe.webp",
  "target_3f_monkey.webp",
  "target_3f_panda.webp",
  "target_4f_dolphin.webp",
  "target_4f_penguin.webp",
  "target_4f_turtle.webp",
  "target_4f_octopus.webp",
  "target_4f_tropical_fish.webp",
  "target_5f_fire_engine.webp",
  "target_5f_ambulance.webp",
  "target_5f_police_car.webp",
  "target_5f_excavator.webp",
  "target_5f_garbage_truck.webp",
  "target_6f_crossing_1.webp",
  "target_6f_crossing_2.webp",
  "target_6f_crossing_3.webp",
  "target_6f_crossing_4.webp",
  "target_6f_crossing_5.webp",
  "target_7f_swing.webp",
  "target_7f_slide.webp",
  "target_7f_monkey_bars.webp",
  "target_7f_horizontal_bar.webp",
  "target_7f_play_structure.webp",
  "target_8f_ferris_wheel.webp",
  "target_8f_carousel.webp",
  "target_8f_mini_train.webp",
  "target_8f_teacups.webp",
  "target_8f_balloons.webp",
  "target_9f_passenger_plane.webp",
  "target_9f_helicopter.webp",
  "target_9f_hot_air_balloon.webp",
  "target_9f_glider.webp",
  "target_9f_propeller_plane.webp",
  "target_10f_sun.webp",
  "target_10f_cloud.webp",
  "target_10f_rain.webp",
  "target_10f_snow.webp",
  "target_10f_typhoon.webp"
]);

const FLOOR_SEQUENCE = Object.freeze(["B1", "1F", "2F", "3F", "4F", "5F", "6F", "7F", "8F", "9F", "10F"]);
const VIEW_WINDOW_ASSETS = Object.freeze({
  B1: "view_b1.webp",
  "1F": "view_1f.webp",
  "2F": "view_2f.webp",
  "3F": "view_3f.webp",
  "4F": "view_4f.webp",
  "5F": "view_5f.webp",
  "6F": "view_6f.webp",
  "7F": "view_7f.webp",
  "8F": "view_8f.webp",
  "9F": "view_9f.webp",
  "10F": "view_10f.webp"
});
const IMAGE_ASSETS = Object.freeze([
  ...BACKGROUND_ASSETS,
  ...TARGET_ASSETS,
  ...Object.values(VIEW_WINDOW_ASSETS)
]);
const ASSETS_PER_FLOOR = 5;
const TARGET_POSITIONS = Object.freeze(["left-bottom", "center", "right-bottom"]);
const FLOOR_SCENE_ASSETS = Object.freeze(Object.fromEntries(
  FLOOR_SEQUENCE.map((floor, floorIndex) => {
    const startIndex = floorIndex * ASSETS_PER_FLOOR;
    return [floor, Object.freeze({
      backgrounds: Object.freeze(BACKGROUND_ASSETS.slice(startIndex, startIndex + ASSETS_PER_FLOOR)),
      targets: Object.freeze(TARGET_ASSETS.slice(startIndex, startIndex + ASSETS_PER_FLOOR))
    })];
  })
));
const SPEECH_MESSAGES = Object.freeze({
  voice_going_up: "Going up.",
  voice_going_down: "Going down.",
  voice_door_closing: "The doors are closing.",
  voice_arrival_b1: "Basement level one.",
  voice_arrival_1f: "First floor.",
  voice_arrival_2f: "Second floor.",
  voice_arrival_3f: "Third floor.",
  voice_arrival_4f: "Fourth floor.",
  voice_arrival_5f: "Fifth floor.",
  voice_arrival_6f: "Sixth floor.",
  voice_arrival_7f: "Seventh floor.",
  voice_arrival_8f: "Eighth floor.",
  voice_arrival_9f: "Ninth floor.",
  voice_arrival_10f: "Tenth floor."
});
const AUDIO_ASSET_PATHS = Object.freeze({
  sfx_elevator_arrival_up: "audio/app/sfx_elevator_arrival_up.mp3",
  sfx_elevator_arrival_down: "audio/app/sfx_elevator_arrival_down.mp3"
});
const PYOKO_AUDIO_ASSETS = Object.freeze([
  "audio/app/sfx_pyoko_01.wav",
  "audio/app/sfx_pyoko_02.wav",
  "audio/app/sfx_pyoko_03.wav",
  "audio/app/sfx_pyoko_04.wav",
  "audio/app/sfx_pyoko_05.wav"
]);
const AVAILABLE_AUDIO_ASSET_IDS = Object.freeze([]);
const MAX_AUTOMATIC_RETRIES = 2;
const DOOR_OPEN_DURATION_MS = 1500;
const DOOR_CLOSE_DURATION_MS = 2000;
const FLOOR_MOVEMENT_DURATION_MS = 1000;
const AUTO_CLOSE_DELAY_MS = 5000;
const SPEECH_COMPLETION_TIMEOUT_MS = 3000;

const SPEECH_SETTINGS = Object.freeze({
  preferredVoiceName: null,
  rate: 0.8
});

const appElements = Object.freeze({
  app: document.getElementById("app"),
  floorDisplay: document.getElementById("floor-display"),
  doorFrame: document.getElementById("door-frame"),
  doorScene: document.getElementById("door-scene"),
  sceneBackground: document.getElementById("scene-background"),
  sceneTarget: document.getElementById("scene-target"),
  viewWindow: document.getElementById("view-window"),
  viewWindowCurrent: document.getElementById("view-window-current"),
  viewWindowNext: document.getElementById("view-window-next"),
  floorButtons: document.getElementById("floor-buttons"),
  loadingScreen: document.getElementById("loading-screen"),
  loadingProgress: document.getElementById("loading-progress"),
  startButton: document.getElementById("start-button"),
  retryButton: document.getElementById("retry-button")
});

const preloadState = {
  loadedImages: new Map(),
  failedAssets: new Set(),
  isRunning: false
};

const gameState = {
  currentFloor: "1F",
  destinationFloor: null,
  door: "closed",
  moving: false,
  selectedFloor: null,
  movementDirection: null
};

const sceneShuffleState = {
  backgroundBags: new Map(),
  targetBags: new Map(),
  positionBag: []
};

const sceneInteractionState = {
  isActive: false
};

let movementTimerId = null;
let autoCloseTimerId = null;
let lastPyokoAudioIndex = -1;
const activePyokoAudios = new Set();

function clearAutoCloseTimer() {
  if (autoCloseTimerId !== null) {
    window.clearTimeout(autoCloseTimerId);
    autoCloseTimerId = null;
  }
}

function clearSceneTimers() {
  clearAutoCloseTimer();
}

function resetSceneInteraction(isActive = false) {
  sceneInteractionState.isActive = isActive;
  appElements.sceneTarget.classList.remove("is-tap-reacting");
}

function deactivateSceneInteraction() {
  sceneInteractionState.isActive = false;
  appElements.sceneTarget.classList.remove("is-tap-reacting");
}

function scheduleAutomaticDoorClose() {
  clearAutoCloseTimer();
  autoCloseTimerId = window.setTimeout(() => {
    autoCloseTimerId = null;
    startAutomaticDoorClosing();
  }, AUTO_CLOSE_DELAY_MS);
}

function shuffleItems(items) {
  const shuffledItems = [...items];

  for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
  }

  return shuffledItems;
}

function drawFloorAsset(bags, floor, assets) {
  let bag = bags.get(floor);

  if (!bag || bag.length === 0) {
    bag = shuffleItems(assets);
    bags.set(floor, bag);
  }

  return bag.pop();
}

function drawTargetPosition() {
  if (sceneShuffleState.positionBag.length === 0) {
    sceneShuffleState.positionBag = shuffleItems(TARGET_POSITIONS);
  }

  return sceneShuffleState.positionBag.pop();
}

function prepareSceneForCurrentFloor() {
  clearSceneTimers();
  resetSceneInteraction(false);
  const floorAssets = FLOOR_SCENE_ASSETS[gameState.currentFloor];
  const background = drawFloorAsset(
    sceneShuffleState.backgroundBags,
    gameState.currentFloor,
    floorAssets.backgrounds
  );
  const target = drawFloorAsset(
    sceneShuffleState.targetBags,
    gameState.currentFloor,
    floorAssets.targets
  );
  const targetPosition = drawTargetPosition();

  appElements.sceneBackground.src = background;
  appElements.sceneTarget.src = target;
  appElements.doorScene.dataset.targetPosition = targetPosition;
  appElements.doorScene.setAttribute("aria-hidden", "false");
}

function activatePreparedScene() {
  resetSceneInteraction(true);
  scheduleAutomaticDoorClose();
}

function selectEnglishVoice(voices) {
  if (SPEECH_SETTINGS.preferredVoiceName !== null) {
    const preferredVoice = voices.find((voice) => voice.name === SPEECH_SETTINGS.preferredVoiceName);
    if (preferredVoice) {
      return preferredVoice;
    }
  }

  const americanEnglishVoice = voices.find((voice) => voice.lang.toLowerCase() === "en-us");
  if (americanEnglishVoice) {
    return americanEnglishVoice;
  }

  return voices.find((voice) => voice.lang.toLowerCase().startsWith("en-")) ?? null;
}

function unlockSpeechSynthesis() {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(" ");
  utterance.lang = "en-US";
  utterance.rate = SPEECH_SETTINGS.rate;
  utterance.volume = 0;

  const voice = selectEnglishVoice(window.speechSynthesis.getVoices());
  if (voice !== null) {
    utterance.voice = voice;
  }

  try {
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    // 音声合成を利用できない環境でもゲーム開始は妨げない。
  }
}

function speakAnnouncement(audioId) {
  const text = SPEECH_MESSAGES[audioId];
  if (!text || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = SPEECH_SETTINGS.rate;

  const voice = selectEnglishVoice(window.speechSynthesis.getVoices());
  if (voice !== null) {
    utterance.voice = voice;
  }

  try {
    window.speechSynthesis.speak(utterance);
  } catch (error) {
    // 移動処理は音声合成の成否を待たずに継続する。
  }
}

function speakAnnouncementAndWait(audioId) {
  return new Promise((resolve) => {
    const text = SPEECH_MESSAGES[audioId];
    if (!text || !("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      resolve();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = SPEECH_SETTINGS.rate;

    const voice = selectEnglishVoice(window.speechSynthesis.getVoices());
    if (voice !== null) {
      utterance.voice = voice;
    }

    let isFinished = false;
    const finishOnce = () => {
      if (isFinished) {
        return;
      }

      isFinished = true;
      window.clearTimeout(failsafeTimerId);
      resolve();
    };
    const failsafeTimerId = window.setTimeout(finishOnce, SPEECH_COMPLETION_TIMEOUT_MS);

    utterance.onend = finishOnce;
    utterance.onerror = finishOnce;

    try {
      window.speechSynthesis.speak(utterance);
    } catch (error) {
      finishOnce();
    }
  });
}

async function startAutomaticDoorClosing() {
  if (gameState.door !== "open") {
    return;
  }

  clearAutoCloseTimer();
  deactivateSceneInteraction();
  setFloorButtonsEnabled(false);
  await speakAnnouncementAndWait("voice_door_closing");

  if (gameState.door !== "open") {
    return;
  }

  gameState.door = "closing";
  appElements.doorFrame.dataset.doorState = gameState.door;

  window.setTimeout(() => {
    gameState.door = "closed";
    appElements.doorFrame.dataset.doorState = gameState.door;
    setFloorButtonsEnabled(true);
  }, DOOR_CLOSE_DURATION_MS);
}

function playAudioAssetAndWait(audioId) {
  return new Promise((resolve) => {
    if (!AVAILABLE_AUDIO_ASSET_IDS.includes(audioId)) {
      resolve();
      return;
    }

    const audio = new Audio(AUDIO_ASSET_PATHS[audioId]);
    audio.addEventListener("ended", resolve, { once: true });
    audio.addEventListener("error", resolve, { once: true });
    audio.play().catch(resolve);
  });
}

async function runArrivalSequence(arrivedFloor, direction) {
  const chimeAudioId = direction === "up"
    ? "sfx_elevator_arrival_up"
    : "sfx_elevator_arrival_down";
  const arrivalSpeechId = `voice_arrival_${arrivedFloor.toLowerCase()}`;

  await playAudioAssetAndWait(chimeAudioId);
  await speakAnnouncementAndWait(arrivalSpeechId);
  openDoorAtCurrentFloor();
}

function playPyokoSound() {
  let audioIndex = Math.floor(Math.random() * PYOKO_AUDIO_ASSETS.length);
  if (audioIndex === lastPyokoAudioIndex) {
    audioIndex = (audioIndex + 1 + Math.floor(Math.random() * (PYOKO_AUDIO_ASSETS.length - 1)))
      % PYOKO_AUDIO_ASSETS.length;
  }

  lastPyokoAudioIndex = audioIndex;
  const audio = new Audio(PYOKO_AUDIO_ASSETS[audioIndex]);
  const releaseAudio = () => activePyokoAudios.delete(audio);
  activePyokoAudios.add(audio);
  audio.addEventListener("ended", releaseAudio, { once: true });
  audio.addEventListener("error", releaseAudio, { once: true });
  audio.play().catch(releaseAudio);
}

function handleSceneTargetClick() {
  if (
    gameState.door !== "open"
    || !sceneInteractionState.isActive
  ) {
    return;
  }

  scheduleAutomaticDoorClose();
  playPyokoSound();
  appElements.sceneTarget.classList.remove("is-tap-reacting");
  void appElements.sceneTarget.offsetWidth;
  appElements.sceneTarget.classList.add("is-tap-reacting");
}

function setStartAvailability(isAvailable) {
  appElements.startButton.disabled = !isAvailable;
  appElements.startButton.hidden = !isAvailable;
}

function resetGameState() {
  if (movementTimerId !== null) {
    window.clearTimeout(movementTimerId);
    movementTimerId = null;
  }

  clearSceneTimers();
  resetSceneInteraction();

  gameState.currentFloor = "1F";
  gameState.destinationFloor = null;
  gameState.door = "closed";
  gameState.moving = false;
  gameState.selectedFloor = null;
  gameState.movementDirection = null;
}

function renderViewWindowFloor(floor) {
  appElements.viewWindow.classList.remove("is-sliding");
  appElements.viewWindow.removeAttribute("data-direction");
  appElements.viewWindow.dataset.floor = floor;
  appElements.viewWindowCurrent.src = VIEW_WINDOW_ASSETS[floor];
  appElements.viewWindowNext.removeAttribute("src");
}

function startViewWindowTransition(nextFloor, direction) {
  if (appElements.viewWindow.dataset.floor !== gameState.currentFloor) {
    renderViewWindowFloor(gameState.currentFloor);
  }

  appElements.viewWindow.classList.remove("is-sliding");
  appElements.viewWindow.dataset.direction = direction > 0 ? "up" : "down";
  appElements.viewWindowNext.src = VIEW_WINDOW_ASSETS[nextFloor];
  void appElements.viewWindow.offsetHeight;
  appElements.viewWindow.classList.add("is-sliding");
}

function finishViewWindowTransition(floor) {
  renderViewWindowFloor(floor);
}

function renderInitialGameState() {
  appElements.floorDisplay.textContent = gameState.currentFloor;
  appElements.doorFrame.dataset.doorState = gameState.door;
  appElements.viewWindow.style.setProperty("--floor-movement-duration", `${FLOOR_MOVEMENT_DURATION_MS}ms`);
  renderViewWindowFloor(gameState.currentFloor);

  for (const button of appElements.floorButtons.querySelectorAll(".floor-button")) {
    button.classList.remove("is-selected");
    button.setAttribute("aria-pressed", "false");
    button.disabled = true;
  }
}

function setFloorButtonsEnabled(isEnabled) {
  for (const button of appElements.floorButtons.querySelectorAll(".floor-button")) {
    button.disabled = !isEnabled;
  }
}

function renderSelectedFloor() {
  for (const button of appElements.floorButtons.querySelectorAll(".floor-button")) {
    const isSelected = button.textContent.trim() === gameState.selectedFloor;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  }
}

function openDoorAtCurrentFloor() {
  if (gameState.door !== "closed") {
    return;
  }

  prepareSceneForCurrentFloor();
  gameState.door = "opening";
  appElements.doorFrame.dataset.doorState = gameState.door;

  window.setTimeout(() => {
    gameState.door = "open";
    appElements.doorFrame.dataset.doorState = gameState.door;
    activatePreparedScene();
  }, DOOR_OPEN_DURATION_MS);
}

function isDoorTransitioning() {
  return gameState.door === "opening" || gameState.door === "closing";
}

function scheduleNextFloorStep() {
  if (!gameState.moving || movementTimerId !== null) {
    return;
  }

  const currentIndex = FLOOR_SEQUENCE.indexOf(gameState.currentFloor);
  const destinationIndex = FLOOR_SEQUENCE.indexOf(gameState.destinationFloor);
  const direction = Math.sign(destinationIndex - currentIndex);

  if (direction === 0) {
    gameState.moving = false;
    return;
  }

  const nextFloor = FLOOR_SEQUENCE[currentIndex + direction];
  startViewWindowTransition(nextFloor, direction);

  movementTimerId = window.setTimeout(() => {
    movementTimerId = null;
    gameState.currentFloor = nextFloor;
    appElements.floorDisplay.textContent = gameState.currentFloor;
    finishViewWindowTransition(gameState.currentFloor);

    if (gameState.currentFloor === gameState.destinationFloor) {
      const arrivalDirection = gameState.movementDirection;
      const arrivedFloor = gameState.currentFloor;
      gameState.moving = false;
      gameState.selectedFloor = null;
      gameState.destinationFloor = null;
      gameState.movementDirection = null;
      renderSelectedFloor();
      runArrivalSequence(arrivedFloor, arrivalDirection);
      return;
    }

    scheduleNextFloorStep();
  }, FLOOR_MOVEMENT_DURATION_MS);
}

function startMoving() {
  if (gameState.moving || movementTimerId !== null) {
    return;
  }

  const currentIndex = FLOOR_SEQUENCE.indexOf(gameState.currentFloor);
  const destinationIndex = FLOOR_SEQUENCE.indexOf(gameState.destinationFloor);
  gameState.movementDirection = destinationIndex > currentIndex ? "up" : "down";
  gameState.moving = true;
  setFloorButtonsEnabled(false);
  speakAnnouncement(gameState.movementDirection === "up" ? "voice_going_up" : "voice_going_down");
  scheduleNextFloorStep();
}

function closeDoorAndStartMoving() {
  clearSceneTimers();
  deactivateSceneInteraction();
  gameState.door = "closing";
  appElements.doorFrame.dataset.doorState = gameState.door;
  setFloorButtonsEnabled(false);

  window.setTimeout(() => {
    gameState.door = "closed";
    appElements.doorFrame.dataset.doorState = gameState.door;
    startMoving();
  }, DOOR_CLOSE_DURATION_MS);
}

function beginDeparture() {
  if (gameState.door === "closed") {
    startMoving();
    return;
  }

  if (gameState.door === "open") {
    closeDoorAndStartMoving();
  }
}

function selectFloor(pressedFloor) {
  if (gameState.moving || isDoorTransitioning()) {
    return;
  }

  if (pressedFloor === gameState.currentFloor) {
    if (gameState.selectedFloor !== null) {
      return;
    }

    openDoorAtCurrentFloor();
    return;
  }

  gameState.destinationFloor = pressedFloor;
  gameState.selectedFloor = pressedFloor;
  renderSelectedFloor();
  beginDeparture();
}

function handleFloorButtonClick(event) {
  const button = event.target.closest(".floor-button");
  if (!button || button.disabled) {
    return;
  }

  selectFloor(button.textContent.trim());
}

function canStartGame() {
  return preloadState.loadedImages.size === IMAGE_ASSETS.length
    && preloadState.failedAssets.size === 0
    && !preloadState.isRunning;
}

function startGame() {
  if (!canStartGame()) {
    return;
  }

  unlockSpeechSynthesis();
  resetGameState();
  renderInitialGameState();
  appElements.loadingScreen.hidden = true;
  appElements.app.removeAttribute("aria-hidden");
  appElements.startButton.disabled = true;
  setFloorButtonsEnabled(true);
}

function updateProgress(processedCount, hasFailures = false) {
  const calculatedPercent = Math.floor((processedCount / IMAGE_ASSETS.length) * 100);
  const percent = hasFailures ? Math.min(calculatedPercent, 99) : calculatedPercent;
  appElements.loadingProgress.textContent = `よみこみちゅう… ${percent}%`;
}

function showPreloadErrors() {
  const failedFilenames = [...preloadState.failedAssets];
  appElements.loadingProgress.style.whiteSpace = "pre-line";
  appElements.loadingProgress.textContent = `よみこみエラー\n${failedFilenames.join("\n")}`;
}

function loadImageOnce(filename) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`画像を読み込めません: ${filename}`));
    image.src = filename;
  });
}

async function loadImageWithRetries(filename) {
  for (let attempt = 0; attempt <= MAX_AUTOMATIC_RETRIES; attempt += 1) {
    try {
      return await loadImageOnce(filename);
    } catch (error) {
      if (attempt === MAX_AUTOMATIC_RETRIES) {
        throw error;
      }
    }
  }

  throw new Error(`画像を読み込めません: ${filename}`);
}

async function preloadAssets(filenames) {
  if (preloadState.isRunning) {
    return;
  }

  preloadState.isRunning = true;
  preloadState.failedAssets.clear();
  setStartAvailability(false);
  appElements.retryButton.disabled = true;
  appElements.retryButton.hidden = true;

  let completedInBatch = 0;
  const alreadyLoadedCount = preloadState.loadedImages.size;
  updateProgress(alreadyLoadedCount);

  await Promise.all(filenames.map(async (filename) => {
    try {
      const image = await loadImageWithRetries(filename);
      preloadState.loadedImages.set(filename, image);
    } catch (error) {
      preloadState.failedAssets.add(filename);
    } finally {
      completedInBatch += 1;
      const processedCount = alreadyLoadedCount + completedInBatch;
      updateProgress(processedCount, preloadState.failedAssets.size > 0);
    }
  }));

  preloadState.isRunning = false;

  const allAssetsLoaded = preloadState.loadedImages.size === IMAGE_ASSETS.length
    && preloadState.failedAssets.size === 0;

  if (allAssetsLoaded) {
    updateProgress(IMAGE_ASSETS.length);
    setStartAvailability(true);
    return;
  }

  setStartAvailability(false);
  showPreloadErrors();
  appElements.retryButton.disabled = false;
  appElements.retryButton.hidden = false;
}

appElements.retryButton.addEventListener("click", () => {
  const failedAssets = [...preloadState.failedAssets];
  preloadAssets(failedAssets);
});

appElements.startButton.addEventListener("click", startGame);
appElements.floorButtons.addEventListener("click", handleFloorButtonClick);
appElements.sceneTarget.addEventListener("click", handleSceneTargetClick);

window.addEventListener("DOMContentLoaded", () => {
  resetGameState();
  renderInitialGameState();
  preloadAssets(IMAGE_ASSETS);
});
