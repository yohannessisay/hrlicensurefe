<template>
  <navigation />
  <div class="flex justify-center p-1 overflow-x-auto">
    <h2
      v-if="noConnection == false"
      class="text-main-400 text-2xl font-serif mt-4 font-bold m-2"
    >
      You are here because the url does not exist in the system please return to
      the home page.
    </h2>
  </div>

  <div class="flex justify-center m-2">
    <span class="flex justify-center m-2" v-if="noConnection == false">
      <h1>ERROR 404- Page not found</h1>
      <svg
      data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        width="24px"
        height="24px"
        class="mt-3 ml-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.75 19.42C15.5512 19.4198 15.3605 19.3407 15.22 19.2C15.1519 19.1271 15.0977 19.0424 15.06 18.95C15.0201 18.8621 14.9996 18.7666 15 18.67C14.999 18.5714 15.0179 18.4736 15.0557 18.3825C15.0936 18.2914 15.1494 18.2089 15.22 18.14C15.289 18.0692 15.3703 18.0115 15.46 17.97C15.5987 17.9174 15.7495 17.9055 15.8948 17.9356C16.04 17.9657 16.1736 18.0366 16.28 18.14C16.3506 18.2089 16.4065 18.2914 16.4443 18.3825C16.4821 18.4736 16.501 18.5714 16.5 18.67C16.5004 18.7666 16.48 18.8621 16.44 18.95C16.4023 19.0424 16.3481 19.1271 16.28 19.2C16.1395 19.3407 15.9489 19.4198 15.75 19.42Z"
          fill="black"
        />
        <path
          d="M15.75 16.17C15.5511 16.17 15.3603 16.091 15.2197 15.9503C15.079 15.8097 15 15.6189 15 15.42C14.9997 15.3202 15.0201 15.2215 15.06 15.13C15.0953 15.0393 15.1499 14.9574 15.22 14.89C15.3631 14.7542 15.5528 14.6786 15.75 14.6786C15.9472 14.6786 16.1369 14.7542 16.28 14.89C16.3501 14.9574 16.4047 15.0393 16.44 15.13C16.4799 15.2215 16.5003 15.3202 16.5 15.42C16.4992 15.5164 16.4788 15.6117 16.44 15.7C16.4046 15.7935 16.3501 15.8787 16.28 15.95C16.1395 16.0907 15.9488 16.1698 15.75 16.17Z"
          fill="black"
        />
        <path
          d="M17.36 22.75H6.64C5.99022 22.75 5.36705 22.4919 4.90759 22.0324C4.44813 21.5729 4.19 20.9498 4.19 20.3V3.7C4.19 3.05022 4.44813 2.42705 4.90759 1.96759C5.36705 1.50812 5.99022 1.25 6.64 1.25H17.36C18.0098 1.25 18.6329 1.50812 19.0924 1.96759C19.5519 2.42705 19.81 3.05022 19.81 3.7V20.3C19.81 20.9498 19.5519 21.5729 19.0924 22.0324C18.6329 22.4919 18.0098 22.75 17.36 22.75ZM6.64 2.75C6.38355 2.76284 6.14186 2.87384 5.965 3.06C5.78815 3.24616 5.68968 3.49322 5.69 3.75V20.3C5.70212 20.548 5.8061 20.7827 5.9817 20.9583C6.1573 21.1339 6.39196 21.2379 6.64 21.25H17.36C17.608 21.2379 17.8427 21.1339 18.0183 20.9583C18.1939 20.7827 18.2979 20.548 18.31 20.3V3.7C18.3103 3.44322 18.2119 3.19616 18.035 3.01C17.8581 2.82384 17.6165 2.71284 17.36 2.7L6.64 2.75Z"
          fill="black"
        />
        <path
          d="M9.88 19.42C9.68109 19.42 9.49033 19.341 9.34967 19.2003C9.20902 19.0597 9.13 18.8689 9.13 18.67V15.42C9.13 15.2211 9.20902 15.0303 9.34967 14.8897C9.49033 14.749 9.68109 14.67 9.88 14.67C10.0789 14.67 10.2697 14.749 10.4103 14.8897C10.551 15.0303 10.63 15.2211 10.63 15.42V18.67C10.6274 18.8681 10.5476 19.0574 10.4075 19.1975C10.2674 19.3376 10.0781 19.4174 9.88 19.42Z"
          fill="black"
        />
        <path
          d="M11.5 17.79H8.25C8.05109 17.79 7.86032 17.711 7.71967 17.5703C7.57902 17.4297 7.5 17.2389 7.5 17.04C7.5 16.8411 7.57902 16.6503 7.71967 16.5097C7.86032 16.369 8.05109 16.29 8.25 16.29H11.5C11.6989 16.29 11.8897 16.369 12.0303 16.5097C12.171 16.6503 12.25 16.8411 12.25 17.04C12.25 17.2389 12.171 17.4297 12.0303 17.5703C11.8897 17.711 11.6989 17.79 11.5 17.79Z"
          fill="black"
        />
        <path
          d="M19.06 12.75H4.94C4.74109 12.75 4.55032 12.671 4.40967 12.5303C4.26902 12.3897 4.19 12.1989 4.19 12C4.19 11.8011 4.26902 11.6103 4.40967 11.4697C4.55032 11.329 4.74109 11.25 4.94 11.25H19.06C19.2589 11.25 19.4497 11.329 19.5903 11.4697C19.731 11.6103 19.81 11.8011 19.81 12C19.81 12.1989 19.731 12.3897 19.5903 12.5303C19.4497 12.671 19.2589 12.75 19.06 12.75Z"
          fill="black"
        />
      </svg>
    </span>
    <span class="flex justify-center m-2" v-else>
      <h1>Seems like there is no internet</h1>
      <svg
        data-bs-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
        width="24px"
        height="24px"
        class="mt-3 ml-4"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 18c.714 0 1.37.25 1.886.666L12 21l-1.886-2.334A2.987 2.987 0 0 1 12 18zM2.808 1.393l17.677 17.678-1.414 1.414-3.682-3.68-.247.306A4.98 4.98 0 0 0 12 16a4.98 4.98 0 0 0-3.141 1.11l-1.885-2.334a7.963 7.963 0 0 1 4.622-1.766l-1.773-1.772a9.963 9.963 0 0 0-4.106 1.982L3.83 10.887A12.984 12.984 0 0 1 7.416 8.83L5.885 7.3a15 15 0 0 0-3.31 2.031L.689 6.997c.915-.74 1.903-1.391 2.952-1.942L1.393 2.808l1.415-1.415zM16.084 11.87l-3.868-3.867L12 8c3.095 0 5.937 1.081 8.17 2.887l-1.886 2.334a10 10 0 0 0-2.2-1.352zM12 3c4.285 0 8.22 1.497 11.31 3.997L21.426 9.33A14.937 14.937 0 0 0 12 6c-.572 0-1.136.032-1.69.094L7.723 3.511C9.094 3.177 10.527 3 12 3z"
          />
        </g>
      </svg>
    </span>
  </div>
  <div class="collapse" id="collapseExample">
    <p class="center text-main-400 font-bold font-mono text-xl">
      Use <span class="label label-danger">Space</span> to shoot and
      <span class="text-black font-extrabold text-3xl">←</span>&#160;<span
        class="text-black font-extrabold text-3xl"
        >→</span
      >
      to move!&#160;&#160;&#160;<button
        class="
          text-xl text-white
          bg-main-400
          hover:text-main-400 hover:border hover:bg-white
          px-2
          rounded-md
        "
        id="restart"
      >
        Restart
      </button>
    </p>

    <canvas id="space-invaders" />
  </div>
</template>
<script>
import Navigation from "@/views/Navigation";
import { onMounted, ref } from "vue";
export default {
  components: {
    Navigation,
  },
  setup() {
    let noConnection = ref(false);
    onMounted(() => {
      if (
        (window.navigator.onLine == false &&
          window.location.hostname == "localhost") ||
        window.location.hostname == "127.0.0.1"
      ) {
        noConnection.value = true;
      }

      (function () {
        "use strict";

        // General
        var canvas, screen, gameSize, game;

        // Assets
        var invaderCanvas,
          invaderMultiplier,
          invaderSize = 20,
          initialOffsetInvader,
          invaderAttackRate,
          invaderSpeed,
          invaderSpawnDelay = 250;

        // Counter
        var i = 0,
          kills = 0,
          spawnDelayCounter = invaderSpawnDelay;

        var invaderDownTimer;

        // Text
        var blocks = [
          [3, 4, 8, 9, 10, 15, 16],
          [2, 4, 7, 11, 14, 16],
          [1, 4, 7, 11, 13, 16],
          [1, 2, 3, 4, 5, 7, 11, 13, 14, 15, 16, 17],
          [4, 7, 11, 16],
          [4, 8, 9, 10, 16],
        ];

        // Game Controller
        // ---------------
        var Game = function () {
          this.level = -1;
          this.lost = false;

          this.player = new Player();
          this.invaders = [];
          this.invaderShots = [];

          if (invaderDownTimer === undefined) {
            invaderDownTimer = setInterval(function () {
              for (i = 0; i < game.invaders.length; i++)
                game.invaders[i].move();
            }, 1000 - this.level * 1.8);
          }
        };

        Game.prototype = {
          update: function () {
            // Next level
            if (game.invaders.length === 0) {
              spawnDelayCounter += 1;
              if (spawnDelayCounter < invaderSpawnDelay) return;

              this.level += 1;

              invaderAttackRate -= 0.002;
              invaderSpeed += 10;

              game.invaders = createInvaders();

              spawnDelayCounter = 0;
            }

            if (!this.lost) {
              // Collision
              game.player.projectile.forEach(function (projectile) {
                game.invaders.forEach(function (invader) {
                  if (collides(projectile, invader)) {
                    invader.destroy();
                    projectile.active = false;
                  }
                });
              });

              this.invaderShots.forEach(function (invaderShots) {
                if (collides(invaderShots, game.player)) {
                  game.player.destroy();
                }
              });

              for (i = 0; i < game.invaders.length; i++)
                game.invaders[i].update();
            }

            // Don't stop player & projectiles.. they look nice
            game.player.update();
            for (i = 0; i < game.invaderShots.length; i++)
              game.invaderShots[i].update();

            this.invaders = game.invaders.filter(function (invader) {
              return invader.active;
            });
          },

          draw: function () {
            if (this.lost) {
              screen.fillStyle = "rgba(7, 103, 126, 0.03)";
              screen.fillRect(0, 0, gameSize.width, gameSize.height);

              screen.font = "55px Lucida Console";
              screen.textAlign = "center";
              screen.fillStyle = "white";
              screen.fillText(
                "You lost",
                gameSize.width / 2,
                gameSize.height / 2
              );
              screen.font = "20px Lucida Console";
              screen.fillText(
                "Points: " + kills,
                gameSize.width / 2,
                gameSize.height / 2 + 30
              );
              window.localStorage.setItem(
                "miniGameScore",
                JSON.stringify(kills)
              );
            } else {
              screen.clearRect(0, 0, gameSize.width, gameSize.height);

              screen.font = "30px Lucida Console";
              screen.textAlign = "right";
              screen.fillText(
                "Points: " + kills,
                gameSize.width,
                gameSize.height - 12
              );
              window.localStorage.setItem(
                "miniGameScore",
                JSON.stringify(kills)
              );
            }

            screen.beginPath();

            var i;
            this.player.draw();
            if (!this.lost)
              for (i = 0; i < this.invaders.length; i++)
                this.invaders[i].draw();
            for (i = 0; i < this.invaderShots.length; i++)
              this.invaderShots[i].draw();

            screen.fill();
          },

          invadersBelow: function (invader) {
            return (
              this.invaders.filter(function (b) {
                return (
                  Math.abs(invader.coordinates.x - b.coordinates.x) === 0 &&
                  b.coordinates.y > invader.coordinates.y
                );
              }).length > 0
            );
          },
        };

        // Invaders
        // --------
        var Invader = function (coordinates) {
          this.active = true;
          this.coordinates = coordinates;
          this.size = {
            width: invaderSize,
            height: invaderSize,
          };

          this.patrolX = 0;
          this.speedX = invaderSpeed;
        };

        Invader.prototype = {
          update: function () {
            if (
              Math.random() > invaderAttackRate &&
              !game.invadersBelow(this)
            ) {
              var projectile = new Projectile(
                {
                  x: this.coordinates.x + this.size.width / 2,
                  y: this.coordinates.y + this.size.height - 5,
                },
                {
                  x: 0,
                  y: 2,
                }
              );
              game.invaderShots.push(projectile);
            }
          },
          draw: function () {
            if (this.active)
              screen.drawImage(
                invaderCanvas,
                this.coordinates.x,
                this.coordinates.y
              );
          },
          move: function () {
            if (this.patrolX < 0 || this.patrolX > 100) {
              this.speedX = -this.speedX;
              this.patrolX += this.speedX;
              this.coordinates.y += this.size.height;

              if (this.coordinates.y + this.size.height * 2 > gameSize.height)
                game.lost = true;
            } else {
              this.coordinates.x += this.speedX;
              this.patrolX += this.speedX;
            }
          },
          destroy: function () {
            this.active = false;
            kills += 1;
          },
        };

        // Player
        // ------
        var Player = function () {
          this.active = true;
          this.size = {
            width: 16,
            height: 8,
          };
          this.shooterHeat = -3;
          this.coordinates = {
            x: (gameSize.width / 2 - this.size.width / 2) | 0,
            y: gameSize.height - this.size.height * 2,
          };

          this.projectile = [];
          this.keyboarder = new KeyController();
        };

        Player.prototype = {
          update: function () {
            for (var i = 0; i < this.projectile.length; i++)
              this.projectile[i].update();

            this.projectile = this.projectile.filter(function (projectile) {
              return projectile.active;
            });

            if (!this.active) return;

            if (
              this.keyboarder.isDown(this.keyboarder.KEYS.LEFT) &&
              this.coordinates.x > 0
            )
              this.coordinates.x -= 2;
            else if (
              this.keyboarder.isDown(this.keyboarder.KEYS.RIGHT) &&
              this.coordinates.x < gameSize.width - this.size.width
            )
              this.coordinates.x += 2;

            if (this.keyboarder.isDown(this.keyboarder.KEYS.Space)) {
              this.shooterHeat += 1;
              if (this.shooterHeat < 0) {
                var projectile = new Projectile(
                  {
                    x: this.coordinates.x + this.size.width / 2 - 1,
                    y: this.coordinates.y - 1,
                  },
                  {
                    x: 0,
                    y: -7,
                  }
                );
                this.projectile.push(projectile);
              } else if (this.shooterHeat > 12) this.shooterHeat = -3;
            } else {
              this.shooterHeat = -3;
            }
          },
          draw: function () {
            if (this.active) {
              screen.rect(
                this.coordinates.x,
                this.coordinates.y,
                this.size.width,
                this.size.height
              );
              screen.rect(
                this.coordinates.x - 2,
                this.coordinates.y + 2,
                20,
                6
              );
              screen.rect(this.coordinates.x + 6, this.coordinates.y - 4, 4, 4);
            }

            for (var i = 0; i < this.projectile.length; i++)
              this.projectile[i].draw();
          },
          destroy: function () {
            this.active = false;
            game.lost = true;
          },
        };

        // Projectile
        // ------
        var Projectile = function (coordinates, velocity) {
          this.active = true;
          this.coordinates = coordinates;
          this.size = {
            width: 3,
            height: 3,
          };
          this.velocity = velocity;
        };

        Projectile.prototype = {
          update: function () {
            this.coordinates.x += this.velocity.x;
            this.coordinates.y += this.velocity.y;

            if (this.coordinates.y > gameSize.height || this.coordinates.y < 0)
              this.active = false;
          },
          draw: function () {
            if (this.active)
              screen.rect(
                this.coordinates.x,
                this.coordinates.y,
                this.size.width,
                this.size.height
              );
          },
        };

        // Keyboard input tracking
        // -----------------------
        var KeyController = function () {
          this.KEYS = {
            LEFT: 37,
            RIGHT: 39,
            Space: 32,
          };
          var keyCode = [37, 39, 32];
          var keyState = {};

          var counter;
          window.addEventListener("keydown", function (e) {
            for (counter = 0; counter < keyCode.length; counter++)
              if (keyCode[counter] == e.keyCode) {
                keyState[e.keyCode] = true;
                e.preventDefault();
              }
          });

          window.addEventListener("keyup", function (e) {
            for (counter = 0; counter < keyCode.length; counter++)
              if (keyCode[counter] == e.keyCode) {
                keyState[e.keyCode] = false;
                e.preventDefault();
              }
          });

          this.isDown = function (keyCode) {
            return keyState[keyCode] === true;
          };
        };

        // Other functions
        // ---------------
        function collides(a, b) {
          return (
            a.coordinates.x < b.coordinates.x + b.size.width &&
            a.coordinates.x + a.size.width > b.coordinates.x &&
            a.coordinates.y < b.coordinates.y + b.size.height &&
            a.coordinates.y + a.size.height > b.coordinates.y
          );
        }

        function getPixelRow(rowRaw) {
          var textRow = [],
            placer = 0,
            row = Math.floor(rowRaw / invaderMultiplier);
          if (row >= blocks.length) return [];
          for (var i = 0; i < blocks[row].length; i++) {
            var tmpContent = blocks[row][i] * invaderMultiplier;
            for (var j = 0; j < invaderMultiplier; j++)
              textRow[placer + j] = tmpContent + j;
            placer += invaderMultiplier;
          }
          return textRow;
        }

        // Write Text
        // -----------
        function createInvaders() {
          var invaders = [];

          var i = blocks.length * invaderMultiplier;
          while (i--) {
            var j = getPixelRow(i);
            for (var k = 0; k < j.length; k++) {
              invaders.push(
                new Invader({
                  x: j[k] * invaderSize,
                  y: i * invaderSize,
                })
              );
            }
          }
          return invaders;
        }

        // Start game
        // ----------
        window.addEventListener("load", function () {
          var invaderAsset = new Image();
          invaderAsset.onload = function () {
            invaderCanvas = document.createElement("canvas");
            invaderCanvas.width = invaderSize;
            invaderCanvas.height = invaderSize;
            invaderCanvas.getContext("2d").drawImage(invaderAsset, 0, 0);

            // Game Creation
            canvas = document.getElementById("space-invaders");
            screen = canvas.getContext("2d");

            initGameStart();
            loop();
          };
          invaderAsset.src = "//stillh.art/project/spaceInvaders/invader.gif";
        });

        window.addEventListener("resize", function () {
          initGameStart();
        });
        document
          .getElementById("restart")
          .addEventListener("click", function () {
            initGameStart();
          });

        function initGameStart() {
          if (window.innerWidth > 1200) {
            screen.canvas.width = 1200;
            screen.canvas.height = 500;
            gameSize = {
              width: 1200,
              height: 500,
            };
            invaderMultiplier = 3;
            initialOffsetInvader = 420;
          } else if (window.innerWidth > 800) {
            screen.canvas.width = 900;
            screen.canvas.height = 600;
            gameSize = {
              width: 900,
              height: 600,
            };
            invaderMultiplier = 2;
            initialOffsetInvader = 280;
          } else {
            screen.canvas.width = 600;
            screen.canvas.height = 300;
            gameSize = {
              width: 600,
              height: 300,
            };
            invaderMultiplier = 1;
            initialOffsetInvader = 140;
          }

          kills = 0;
          invaderAttackRate = 0.999;
          invaderSpeed = 20;
          spawnDelayCounter = invaderSpawnDelay;

          game = new Game();
        }

        function loop() {
          game.update();
          game.draw();

          requestAnimationFrame(loop);
        }
      })();
    });
    return {
      noConnection,
    };
  },
};
</script>
<style scoped>
.center {
  text-align: center;
}
#space-invaders {
  margin: 0 auto;
  display: block;
  background: white;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 400px;
}
</style>
