export interface AssetStructure {
  path: string;
  name: string;
  children?: AssetStructure[];
}

export interface PageAssetStructure {
  path: string;
  name: string;
  children?: string[];
}

export const ASSET_FOLDERS: AssetStructure = {
  path: "",
  name: "",
  children: [
    {
      path: "images",
      name: "images",
      children: [
        {
          path: "images/backgrounds",
          name: "backgrounds",
          children: [
            { path: "images/backgrounds/back1_1.png", name: "back1_1.png" },
            { path: "images/backgrounds/back1_2.png", name: "back1_2.png" },
            { path: "images/backgrounds/back1_3.png", name: "back1_3.png" },
            { path: "images/backgrounds/back1_4.png", name: "back1_4.png" },
            { path: "images/backgrounds/back1_5.png", name: "back1_5.png" },
            { path: "images/backgrounds/back2_1.png", name: "back2_1.png" },
            { path: "images/backgrounds/back2_2.png", name: "back2_2.png" },
            { path: "images/backgrounds/back2_3.png", name: "back2_3.png" },
            { path: "images/backgrounds/back3_1.png", name: "back3_1.png" },
            { path: "images/backgrounds/back3_2.png", name: "back3_2.png" },
            { path: "images/backgrounds/back3_3.png", name: "back3_3.png" },
            {
              path: "images/backgrounds/background1.png",
              name: "background1.png",
            },
            {
              path: "images/backgrounds/background2.png",
              name: "background2.png",
            },
            {
              path: "images/backgrounds/background3.png",
              name: "background3.png",
            },
            { path: "images/backgrounds/black.png", name: "black.png" },
            { path: "images/backgrounds/clouds.png", name: "clouds.png" },
            {
              path: "images/backgrounds/fog_mask.png",
              name: "fog_mask.png",
            },
            {
              path: "images/backgrounds/foreground1.png",
              name: "foreground1.png",
            },
            {
              path: "images/backgrounds/foreground3.png",
              name: "foreground3.png",
            },
            { path: "images/backgrounds/grid.png", name: "grid.png" },
            { path: "images/backgrounds/metal.png", name: "metal.png" },
            { path: "images/backgrounds/moon.png", name: "moon.png" },
            {
              path: "images/backgrounds/mountains.png",
              name: "mountains.png",
            },
            {
              path: "images/backgrounds/mountains_night.png",
              name: "mountains_night.png",
            },
            {
              path: "images/backgrounds/parallax_dark.png",
              name: "parallax_dark.png",
            },
            {
              path: "images/backgrounds/parallax_mars.png",
              name: "parallax_mars.png",
            },
            {
              path: "images/backgrounds/parallax_moon.png",
              name: "parallax_moon.png",
            },
            {
              path: "images/backgrounds/parallax_sun.png",
              name: "parallax_sun.png",
            },
            { path: "images/backgrounds/road.png", name: "road.png" },
            { path: "images/backgrounds/space.png", name: "space.png" },
            { path: "images/backgrounds/sun.png", name: "sun.png" },
          ],
        },
        {
          path: "images/car_game",
          name: "car_game",
          children: [
            { path: "images/car_game/car1.png", name: "car1.png" },
            { path: "images/car_game/car2.png", name: "car2.png" },
            { path: "images/car_game/car3.png", name: "car3.png" },
            { path: "images/car_game/car4.png", name: "car4.png" },
            { path: "images/car_game/car5.png", name: "car5.png" },
            { path: "images/car_game/car6.png", name: "car6.png" },
            { path: "images/car_game/car7.png", name: "car7.png" },
            {
              path: "images/car_game/character.png",
              name: "character.png",
            },
            {
              path: "images/car_game/character_l.png",
              name: "character_l.png",
            },
            {
              path: "images/car_game/character_r.png",
              name: "character_r.png",
            },
            { path: "images/car_game/exhaust1.png", name: "exhaust1.png" },
            { path: "images/car_game/exhaust2.png", name: "exhaust2.png" },
            { path: "images/car_game/exhaust3.png", name: "exhaust3.png" },
            { path: "images/car_game/gascan.png", name: "gascan.png" },
            {
              path: "images/car_game/spiketrap.png",
              name: "spiketrap.png",
            },
            {
              path: "images/car_game/totaled_car.png",
              name: "totaled_car.png",
            },
            {
              path: "images/car_game/totaled_truck.png",
              name: "totaled_truck.png",
            },
            { path: "images/car_game/warning.png", name: "warning.png" },
          ],
        },
        {
          path: "images/cards",
          name: "cards",
          children: [
            { path: "images/cards/card.png", name: "card.png" },
            { path: "images/cards/card_large.png", name: "card_large.png" },
            {
              path: "images/cards/card_large_flip.png",
              name: "card_large_flip.png",
            },
          ],
        },
        {
          path: "images/characters",
          name: "characters",
          children: [
            {
              path: "images/characters/bobby",
              name: "bobby",
              children: [
                {
                  path: "images/characters/bobby/bobby.png",
                  name: "bobby.png",
                },
                {
                  path: "images/characters/bobby/bobby_double_barrel.png",
                  name: "bobby_double_barrel.png",
                },
                {
                  path: "images/characters/bobby/bobby_double_barrel_fire.png",
                  name: "bobby_double_barrel_fire.png",
                },
                {
                  path: "images/characters/bobby/bobby_double_barrel_reload.png",
                  name: "bobby_double_barrel_reload.png",
                },
                {
                  path: "images/characters/bobby/bobby_eagle.png",
                  name: "bobby_eagle.png",
                },
                {
                  path: "images/characters/bobby/bobby_eagle_fire.png",
                  name: "bobby_eagle_fire.png",
                },
                {
                  path: "images/characters/bobby/bobby_eagle_reload.png",
                  name: "bobby_eagle_reload.png",
                },
                {
                  path: "images/characters/bobby/bobby_eagle_walk.png",
                  name: "bobby_eagle_walk.png",
                },
                {
                  path: "images/characters/bobby/bobby_gun.png",
                  name: "bobby_gun.png",
                },
                {
                  path: "images/characters/bobby/bobby_luger.png",
                  name: "bobby_luger.png",
                },
                {
                  path: "images/characters/bobby/bobby_luger_fire.png",
                  name: "bobby_luger_fire.png",
                },
                {
                  path: "images/characters/bobby/bobby_luger_reload.png",
                  name: "bobby_luger_reload.png",
                },
                {
                  path: "images/characters/bobby/bobby_luger_walk.png",
                  name: "bobby_luger_walk.png",
                },
                {
                  path: "images/characters/bobby/bobby_python.png",
                  name: "bobby_python.png",
                },
                {
                  path: "images/characters/bobby/bobby_python_fire.png",
                  name: "bobby_python_fire.png",
                },
                {
                  path: "images/characters/bobby/bobby_python_reload.png",
                  name: "bobby_python_reload.png",
                },
                {
                  path: "images/characters/bobby/bobby_python_walk.png",
                  name: "bobby_python_walk.png",
                },
                {
                  path: "images/characters/bobby/bobby_walk.png",
                  name: "bobby_walk.png",
                },
                {
                  path: "images/characters/bobby/bobby_walk_double_barrel.png",
                  name: "bobby_walk_double_barrel.png",
                },
              ],
            },
            {
              path: "images/characters/hector_space_toaster_iiv",
              name: "hector_space_toaster_iiv",
              children: [
                {
                  path: "images/characters/hector_space_toaster_iiv/robot.png",
                  name: "robot.png",
                },
                {
                  path: "images/characters/hector_space_toaster_iiv/robot_die.png",
                  name: "robot_die.png",
                },
                {
                  path: "images/characters/hector_space_toaster_iiv/robot_invincible.png",
                  name: "robot_invincible.png",
                },
                {
                  path: "images/characters/hector_space_toaster_iiv/robot_invincible_fire.png",
                  name: "robot_invincible_fire.png",
                },
                {
                  path: "images/characters/hector_space_toaster_iiv/robot_invincible_top.png",
                  name: "robot_invincible_top.png",
                },
                {
                  path: "images/characters/hector_space_toaster_iiv/robotfire.png",
                  name: "robotfire.png",
                },
              ],
            },
            {
              path: "images/characters/knight",
              name: "knight",
              children: [
                {
                  path: "images/characters/knight/character_l.png",
                  name: "character_l.png",
                },
                {
                  path: "images/characters/knight/character_l_hammer_up.png",
                  name: "character_l_hammer_up.png",
                },
                {
                  path: "images/characters/knight/character_l_slash.png",
                  name: "character_l_slash.png",
                },
                {
                  path: "images/characters/knight/character_r.png",
                  name: "character_r.png",
                },
                {
                  path: "images/characters/knight/character_r_hammer_up.png",
                  name: "character_r_hammer_up.png",
                },
                {
                  path: "images/characters/knight/character_r_slash.png",
                  name: "character_r_slash.png",
                },
              ],
            },
            {
              path: "images/characters/miner",
              name: "miner",
              children: [
                {
                  path: "images/characters/miner/character.png",
                  name: "character.png",
                },
                {
                  path: "images/characters/miner/character2.png",
                  name: "character2.png",
                },
                {
                  path: "images/characters/miner/jump1.png",
                  name: "jump1.png",
                },
                {
                  path: "images/characters/miner/jump2.png",
                  name: "jump2.png",
                },
                {
                  path: "images/characters/miner/left1.png",
                  name: "left1.png",
                },
                {
                  path: "images/characters/miner/left2.png",
                  name: "left2.png",
                },
                {
                  path: "images/characters/miner/left3.png",
                  name: "left3.png",
                },
                {
                  path: "images/characters/miner/right1.png",
                  name: "right1.png",
                },
                {
                  path: "images/characters/miner/right2.png",
                  name: "right2.png",
                },
                {
                  path: "images/characters/miner/right3.png",
                  name: "right3.png",
                },
                {
                  path: "images/characters/miner/up1.png",
                  name: "up1.png",
                },
                {
                  path: "images/characters/miner/up2.png",
                  name: "up2.png",
                },
                { path: "images/characters/miner/up3.png", name: "up3.png" },
              ],
            },
            {
              path: "images/characters/mini_jim",
              name: "mini_jim",
              children: [
                {
                  path: "images/characters/mini_jim/blue",
                  name: "blue",
                  children: [
                    {
                      path: "images/characters/mini_jim/blue/character_1_left.png",
                      name: "character_1_left.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_left_1.png",
                      name: "character_1_left_1.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_left_2.png",
                      name: "character_1_left_2.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_left_3.png",
                      name: "character_1_left_3.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_left_4.png",
                      name: "character_1_left_4.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_left_jump_1.png",
                      name: "character_1_left_jump_1.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_left_jump_2.png",
                      name: "character_1_left_jump_2.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_slide_left.png",
                      name: "character_1_slide_left.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_slide_left_1.png",
                      name: "character_1_slide_left_1.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_slide_left_2.png",
                      name: "character_1_slide_left_2.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_slide_left_3.png",
                      name: "character_1_slide_left_3.png",
                    },
                    {
                      path: "images/characters/mini_jim/blue/character_1_slide_left_4.png",
                      name: "character_1_slide_left_4.png",
                    },
                  ],
                },
                {
                  path: "images/characters/mini_jim/orange",
                  name: "orange",
                  children: [
                    {
                      path: "images/characters/mini_jim/orange/character_2_left.png",
                      name: "character_2_left.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_left_1.png",
                      name: "character_2_left_1.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_left_2.png",
                      name: "character_2_left_2.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_left_3.png",
                      name: "character_2_left_3.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_left_4.png",
                      name: "character_2_left_4.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_left_jump_1.png",
                      name: "character_2_left_jump_1.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_left_jump_2.png",
                      name: "character_2_left_jump_2.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_slide_left.png",
                      name: "character_2_slide_left.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_slide_left_1.png",
                      name: "character_2_slide_left_1.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_slide_left_2.png",
                      name: "character_2_slide_left_2.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_slide_left_3.png",
                      name: "character_2_slide_left_3.png",
                    },
                    {
                      path: "images/characters/mini_jim/orange/character_2_slide_left_4.png",
                      name: "character_2_slide_left_4.png",
                    },
                  ],
                },
              ],
            },
            {
              path: "images/characters/mutant",
              name: "mutant",
              children: [
                {
                  path: "images/characters/mutant/dead.png",
                  name: "dead.png",
                },
                {
                  path: "images/characters/mutant/left_1.png",
                  name: "left_1.png",
                },
                {
                  path: "images/characters/mutant/left_2.png",
                  name: "left_2.png",
                },
                {
                  path: "images/characters/mutant/left_3.png",
                  name: "left_3.png",
                },
                {
                  path: "images/characters/mutant/left_4.png",
                  name: "left_4.png",
                },
                {
                  path: "images/characters/mutant/left_5.png",
                  name: "left_5.png",
                },
                {
                  path: "images/characters/mutant/left_6.png",
                  name: "left_6.png",
                },
                {
                  path: "images/characters/mutant/right_1.png",
                  name: "right_1.png",
                },
                {
                  path: "images/characters/mutant/right_2.png",
                  name: "right_2.png",
                },
                {
                  path: "images/characters/mutant/right_3.png",
                  name: "right_3.png",
                },
                {
                  path: "images/characters/mutant/right_4.png",
                  name: "right_4.png",
                },
                {
                  path: "images/characters/mutant/right_5.png",
                  name: "right_5.png",
                },
                {
                  path: "images/characters/mutant/right_6.png",
                  name: "right_6.png",
                },
              ],
            },
            {
              path: "images/characters/robot",
              name: "robot",
              children: [
                {
                  path: "images/characters/robot/robot1.png",
                  name: "robot1.png",
                },
                {
                  path: "images/characters/robot/robot2.png",
                  name: "robot2.png",
                },
                {
                  path: "images/characters/robot/robot3.png",
                  name: "robot3.png",
                },
                {
                  path: "images/characters/robot/robot4.png",
                  name: "robot4.png",
                },
              ],
            },
            {
              path: "images/characters/slimes",
              name: "slimes",
              children: [
                {
                  path: "images/characters/slimes/blob2_animate.png",
                  name: "blob2_animate.png",
                },
                {
                  path: "images/characters/slimes/blob3_animate.png",
                  name: "blob3_animate.png",
                },
                {
                  path: "images/characters/slimes/blob_animate.png",
                  name: "blob_animate.png",
                },
                {
                  path: "images/characters/slimes/boss_animate.png",
                  name: "boss_animate.png",
                },
              ],
            },
          ],
        },
        {
          path: "images/cursors",
          name: "cursors",
          children: [
            { path: "images/cursors/break.png", name: "break.png" },
            { path: "images/cursors/combine.png", name: "combine.png" },
            { path: "images/cursors/cursor.png", name: "cursor.png" },
            { path: "images/cursors/cursor1.png", name: "cursor1.png" },
            { path: "images/cursors/cursor2.png", name: "cursor2.png" },
            { path: "images/cursors/cursor3.png", name: "cursor3.png" },
            { path: "images/cursors/info.png", name: "info.png" },
            { path: "images/cursors/mouse.png", name: "mouse.png" },
            { path: "images/cursors/mouse_r.png", name: "mouse_r.png" },
            { path: "images/cursors/place.png", name: "place.png" },
          ],
        },
        {
          path: "images/guns",
          name: "guns",
          children: [
            { path: "images/guns/12_gauge.png", name: "12_gauge.png" },
            { path: "images/guns/22.png", name: "22.png" },
            {
              path: "images/guns/airsoft_gun.png",
              name: "airsoft_gun.png",
            },
            { path: "images/guns/bb_gun.png", name: "bb_gun.png" },
            { path: "images/guns/bullet.png", name: "bullet.png" },
            {
              path: "images/guns/bullet_ball.png",
              name: "bullet_ball.png",
            },
            {
              path: "images/guns/double_barrel.png",
              name: "double_barrel.png",
            },
            { path: "images/guns/eagle.png", name: "eagle.png" },
            { path: "images/guns/luger.png", name: "luger.png" },
            { path: "images/guns/m1.png", name: "m1.png" },
            { path: "images/guns/minigun.png", name: "minigun.png" },
            { path: "images/guns/pellet_gun.png", name: "pellet_gun.png" },
            { path: "images/guns/pistol.png", name: "pistol.png" },
            { path: "images/guns/ppsh.png", name: "ppsh.png" },
            { path: "images/guns/python.png", name: "python.png" },
            { path: "images/guns/remington.png", name: "remington.png" },
            { path: "images/guns/smg.png", name: "smg.png" },
            { path: "images/guns/spit_ball.png", name: "spit_ball.png" },
          ],
        },
        {
          path: "images/meow_meow_game",
          name: "meow_meow_game",
          children: [
            {
              path: "images/meow_meow_game/background.png",
              name: "background.png",
            },
            {
              path: "images/meow_meow_game/background_old.png",
              name: "background_old.png",
            },
            {
              path: "images/meow_meow_game/barrier.png",
              name: "barrier.png",
            },
            {
              path: "images/meow_meow_game/cat_slash.png",
              name: "cat_slash.png",
            },
            {
              path: "images/meow_meow_game/cat_walk.png",
              name: "cat_walk.png",
            },
            {
              path: "images/meow_meow_game/foreground.png",
              name: "foreground.png",
            },
            {
              path: "images/meow_meow_game/garbage.png",
              name: "garbage.png",
            },
            { path: "images/meow_meow_game/menu.png", name: "menu.png" },
            {
              path: "images/meow_meow_game/midground.png",
              name: "midground.png",
            },
            { path: "images/meow_meow_game/rain.png", name: "rain.png" },
            {
              path: "images/meow_meow_game/thoughts.png",
              name: "thoughts.png",
            },
          ],
        },
        {
          path: "images/mini_jim",
          name: "mini_jim",
          children: [
            { path: "images/mini_jim/bottle.png", name: "bottle.png" },
            { path: "images/mini_jim/chair.png", name: "chair.png" },
            { path: "images/mini_jim/coca-ine.png", name: "coca-ine.png" },
            { path: "images/mini_jim/couch.png", name: "couch.png" },
            { path: "images/mini_jim/fork2.png", name: "fork2.png" },
            { path: "images/mini_jim/glasses.png", name: "glasses.png" },
            { path: "images/mini_jim/mydesk.png", name: "mydesk.png" },
            { path: "images/mini_jim/table.png", name: "table.png" },
            {
              path: "images/mini_jim/table_chair.png",
              name: "table_chair.png",
            },
          ],
        },
        {
          path: "images/misc",
          name: "misc",
          children: [
            { path: "images/misc/321go.png", name: "321go.png" },
            { path: "images/misc/spotlight.png", name: "spotlight.png" },
          ],
        },
        {
          path: "images/physics",
          name: "physics",
          children: [
            { path: "images/physics/cement.png", name: "cement.png" },
            { path: "images/physics/ipod.png", name: "ipod.png" },
            { path: "images/physics/ipodsmash.png", name: "ipodsmash.png" },
            { path: "images/physics/rubber.png", name: "rubber.png" },
            { path: "images/physics/wood.png", name: "wood.png" },
          ],
        },
        {
          path: "images/robot_flier",
          name: "robot_flier",
          children: [
            {
              path: "images/robot_flier/asteroid_dark.png",
              name: "asteroid_dark.png",
            },
            {
              path: "images/robot_flier/asteroid_mars.png",
              name: "asteroid_mars.png",
            },
            {
              path: "images/robot_flier/asteroid_moon.png",
              name: "asteroid_moon.png",
            },
            {
              path: "images/robot_flier/asteroid_sun.png",
              name: "asteroid_sun.png",
            },
            { path: "images/robot_flier/bomb.png", name: "bomb.png" },
            { path: "images/robot_flier/comet.png", name: "comet.png" },
            { path: "images/robot_flier/energy.png", name: "energy.png" },
            {
              path: "images/robot_flier/force_feild.png",
              name: "force_feild.png",
            },
            {
              path: "images/robot_flier/power_magnet.png",
              name: "power_magnet.png",
            },
            {
              path: "images/robot_flier/power_magnet_four.png",
              name: "power_magnet_four.png",
            },
            {
              path: "images/robot_flier/power_magnet_three.png",
              name: "power_magnet_three.png",
            },
            {
              path: "images/robot_flier/power_magnet_two.png",
              name: "power_magnet_two.png",
            },
            {
              path: "images/robot_flier/power_star.png",
              name: "power_star.png",
            },
          ],
        },
        {
          path: "images/text_backgrounds",
          name: "text_backgrounds",
          children: [
            {
              path: "images/text_backgrounds/paper.png",
              name: "paper.png",
            },
            {
              path: "images/text_backgrounds/speech.png",
              name: "speech.png",
            },
            {
              path: "images/text_backgrounds/speech_sign.png",
              name: "speech_sign.png",
            },
            {
              path: "images/text_backgrounds/statue.png",
              name: "statue.png",
            },
            {
              path: "images/text_backgrounds/thought_bubble.png",
              name: "thought_bubble.png",
            },
          ],
        },
        {
          path: "images/tiles",
          name: "tiles",
          children: [
            {
              path: "images/tiles/128x128",
              name: "128x128",
              children: [
                {
                  path: "images/tiles/128x128/door_broken.png",
                  name: "door_broken.png",
                },
                {
                  path: "images/tiles/128x128/door_closed.png",
                  name: "door_closed.png",
                },
                {
                  path: "images/tiles/128x128/door_open.png",
                  name: "door_open.png",
                },
                {
                  path: "images/tiles/128x128/window_broken.png",
                  name: "window_broken.png",
                },
                {
                  path: "images/tiles/128x128/window_closed.png",
                  name: "window_closed.png",
                },
                {
                  path: "images/tiles/128x128/window_open.png",
                  name: "window_open.png",
                },
              ],
            },
            {
              path: "images/tiles/20x20",
              name: "20x20",
              children: [
                { path: "images/tiles/20x20/acorn.png", name: "acorn.png" },
                { path: "images/tiles/20x20/air.png", name: "air.png" },
                { path: "images/tiles/20x20/anvil.png", name: "anvil.png" },
                { path: "images/tiles/20x20/ball.png", name: "ball.png" },
                { path: "images/tiles/20x20/beam.png", name: "beam.png" },
                {
                  path: "images/tiles/20x20/bedrock.png",
                  name: "bedrock.png",
                },
                { path: "images/tiles/20x20/block.png", name: "block.png" },
                {
                  path: "images/tiles/20x20/block_break1.png",
                  name: "block_break1.png",
                },
                {
                  path: "images/tiles/20x20/block_break2.png",
                  name: "block_break2.png",
                },
                {
                  path: "images/tiles/20x20/block_break3.png",
                  name: "block_break3.png",
                },
                {
                  path: "images/tiles/20x20/block_break4.png",
                  name: "block_break4.png",
                },
                {
                  path: "images/tiles/20x20/block_break5.png",
                  name: "block_break5.png",
                },
                {
                  path: "images/tiles/20x20/block_break6.png",
                  name: "block_break6.png",
                },
                {
                  path: "images/tiles/20x20/block_break7.png",
                  name: "block_break7.png",
                },
                { path: "images/tiles/20x20/box.png", name: "box.png" },
                { path: "images/tiles/20x20/brick.png", name: "brick.png" },
                {
                  path: "images/tiles/20x20/brickback.png",
                  name: "brickback.png",
                },
                { path: "images/tiles/20x20/broom.png", name: "broom.png" },
                {
                  path: "images/tiles/20x20/bulb_off.png",
                  name: "bulb_off.png",
                },
                {
                  path: "images/tiles/20x20/bulb_on.png",
                  name: "bulb_on.png",
                },
                {
                  path: "images/tiles/20x20/character.png",
                  name: "character.png",
                },
                {
                  path: "images/tiles/20x20/character_l.png",
                  name: "character_l.png",
                },
                {
                  path: "images/tiles/20x20/character_r.png",
                  name: "character_r.png",
                },
                {
                  path: "images/tiles/20x20/character_u.png",
                  name: "character_u.png",
                },
                {
                  path: "images/tiles/20x20/cloud1.png",
                  name: "cloud1.png",
                },
                {
                  path: "images/tiles/20x20/cloud2.png",
                  name: "cloud2.png",
                },
                {
                  path: "images/tiles/20x20/conveyor_left1.png",
                  name: "conveyor_left1.png",
                },
                {
                  path: "images/tiles/20x20/conveyor_left2.png",
                  name: "conveyor_left2.png",
                },
                {
                  path: "images/tiles/20x20/conveyor_right1.png",
                  name: "conveyor_right1.png",
                },
                {
                  path: "images/tiles/20x20/conveyor_right2.png",
                  name: "conveyor_right2.png",
                },
                { path: "images/tiles/20x20/dirt.png", name: "dirt.png" },
                {
                  path: "images/tiles/20x20/dirt_grass.png",
                  name: "dirt_grass.png",
                },
                {
                  path: "images/tiles/20x20/dirtback.png",
                  name: "dirtback.png",
                },
                { path: "images/tiles/20x20/earth.png", name: "earth.png" },
                {
                  path: "images/tiles/20x20/elevator.png",
                  name: "elevator.png",
                },
                {
                  path: "images/tiles/20x20/elevator2.png",
                  name: "elevator2.png",
                },
                {
                  path: "images/tiles/20x20/end_portal_off.png",
                  name: "end_portal_off.png",
                },
                {
                  path: "images/tiles/20x20/end_portal_on1.png",
                  name: "end_portal_on1.png",
                },
                {
                  path: "images/tiles/20x20/end_portal_on2.png",
                  name: "end_portal_on2.png",
                },
                {
                  path: "images/tiles/20x20/eraser.png",
                  name: "eraser.png",
                },
                { path: "images/tiles/20x20/error.png", name: "error.png" },
                { path: "images/tiles/20x20/fan1.png", name: "fan1.png" },
                { path: "images/tiles/20x20/fan2.png", name: "fan2.png" },
                { path: "images/tiles/20x20/fire.png", name: "fire.png" },
                { path: "images/tiles/20x20/fish.png", name: "fish.png" },
                { path: "images/tiles/20x20/floor.png", name: "floor.png" },
                {
                  path: "images/tiles/20x20/garbagecan.png",
                  name: "garbagecan.png",
                },
                { path: "images/tiles/20x20/gold.png", name: "gold.png" },
                { path: "images/tiles/20x20/grass.png", name: "grass.png" },
                {
                  path: "images/tiles/20x20/ground.png",
                  name: "ground.png",
                },
                { path: "images/tiles/20x20/iron.png", name: "iron.png" },
                {
                  path: "images/tiles/20x20/ironblock.png",
                  name: "ironblock.png",
                },
                {
                  path: "images/tiles/20x20/janitor_room.png",
                  name: "janitor_room.png",
                },
                {
                  path: "images/tiles/20x20/janitor_room_open.png",
                  name: "janitor_room_open.png",
                },
                {
                  path: "images/tiles/20x20/janitorroom.png",
                  name: "janitorroom.png",
                },
                {
                  path: "images/tiles/20x20/janitorroomopen.png",
                  name: "janitorroomopen.png",
                },
                {
                  path: "images/tiles/20x20/ladder.png",
                  name: "ladder.png",
                },
                { path: "images/tiles/20x20/lava1.png", name: "lava1.png" },
                { path: "images/tiles/20x20/lava2.png", name: "lava2.png" },
                { path: "images/tiles/20x20/leafs.png", name: "leafs.png" },
                {
                  path: "images/tiles/20x20/leaves.png",
                  name: "leaves.png",
                },
                {
                  path: "images/tiles/20x20/leaves1.png",
                  name: "leaves1.png",
                },
                {
                  path: "images/tiles/20x20/leaves2.png",
                  name: "leaves2.png",
                },
                {
                  path: "images/tiles/20x20/lelevator1.png",
                  name: "lelevator1.png",
                },
                {
                  path: "images/tiles/20x20/lelevator2.png",
                  name: "lelevator2.png",
                },
                {
                  path: "images/tiles/20x20/merchant.png",
                  name: "merchant.png",
                },
                {
                  path: "images/tiles/20x20/monster_left1.png",
                  name: "monster_left1.png",
                },
                {
                  path: "images/tiles/20x20/monster_left2.png",
                  name: "monster_left2.png",
                },
                {
                  path: "images/tiles/20x20/monster_right1.png",
                  name: "monster_right1.png",
                },
                {
                  path: "images/tiles/20x20/monster_right2.png",
                  name: "monster_right2.png",
                },
                { path: "images/tiles/20x20/npc1.png", name: "npc1.png" },
                { path: "images/tiles/20x20/npc2.png", name: "npc2.png" },
                { path: "images/tiles/20x20/npc3.png", name: "npc3.png" },
                { path: "images/tiles/20x20/npc4.png", name: "npc4.png" },
                { path: "images/tiles/20x20/npc5.png", name: "npc5.png" },
                { path: "images/tiles/20x20/npc6.png", name: "npc6.png" },
                {
                  path: "images/tiles/20x20/plywood.png",
                  name: "plywood.png",
                },
                {
                  path: "images/tiles/20x20/plywood_back.png",
                  name: "plywood_back.png",
                },
                {
                  path: "images/tiles/20x20/portal1.png",
                  name: "portal1.png",
                },
                {
                  path: "images/tiles/20x20/portal2.png",
                  name: "portal2.png",
                },
                {
                  path: "images/tiles/20x20/portal3.png",
                  name: "portal3.png",
                },
                {
                  path: "images/tiles/20x20/portal4.png",
                  name: "portal4.png",
                },
                {
                  path: "images/tiles/20x20/pretty.png",
                  name: "pretty.png",
                },
                {
                  path: "images/tiles/20x20/refinedwood.png",
                  name: "refinedwood.png",
                },
                {
                  path: "images/tiles/20x20/relevator1.png",
                  name: "relevator1.png",
                },
                {
                  path: "images/tiles/20x20/relevator2.png",
                  name: "relevator2.png",
                },
                { path: "images/tiles/20x20/robot.png", name: "robot.png" },
                { path: "images/tiles/20x20/scrap.png", name: "scrap.png" },
                {
                  path: "images/tiles/20x20/shingle.png",
                  name: "shingle.png",
                },
                {
                  path: "images/tiles/20x20/shinglehalf.png",
                  name: "shinglehalf.png",
                },
                { path: "images/tiles/20x20/sign1.png", name: "sign1.png" },
                { path: "images/tiles/20x20/sign2.png", name: "sign2.png" },
                { path: "images/tiles/20x20/skull.png", name: "skull.png" },
                {
                  path: "images/tiles/20x20/solidstone.png",
                  name: "solidstone.png",
                },
                {
                  path: "images/tiles/20x20/spikes1.png",
                  name: "spikes1.png",
                },
                {
                  path: "images/tiles/20x20/spikes2.png",
                  name: "spikes2.png",
                },
                {
                  path: "images/tiles/20x20/stairs.png",
                  name: "stairs.png",
                },
                { path: "images/tiles/20x20/start.png", name: "start.png" },
                { path: "images/tiles/20x20/stone.png", name: "stone.png" },
                {
                  path: "images/tiles/20x20/stoneback.png",
                  name: "stoneback.png",
                },
                {
                  path: "images/tiles/20x20/stoneblock.png",
                  name: "stoneblock.png",
                },
                {
                  path: "images/tiles/20x20/switchoff.png",
                  name: "switchoff.png",
                },
                {
                  path: "images/tiles/20x20/switchon.png",
                  name: "switchon.png",
                },
                {
                  path: "images/tiles/20x20/tallgrass.png",
                  name: "tallgrass.png",
                },
                {
                  path: "images/tiles/20x20/tallgrass1.png",
                  name: "tallgrass1.png",
                },
                {
                  path: "images/tiles/20x20/tallgrass2.png",
                  name: "tallgrass2.png",
                },
                {
                  path: "images/tiles/20x20/torch1.png",
                  name: "torch1.png",
                },
                {
                  path: "images/tiles/20x20/torch2.png",
                  name: "torch2.png",
                },
                { path: "images/tiles/20x20/tree.png", name: "tree.png" },
                { path: "images/tiles/20x20/wall.png", name: "wall.png" },
                { path: "images/tiles/20x20/wall2.png", name: "wall2.png" },
                { path: "images/tiles/20x20/water.png", name: "water.png" },
                {
                  path: "images/tiles/20x20/water1.png",
                  name: "water1.png",
                },
                {
                  path: "images/tiles/20x20/water2.png",
                  name: "water2.png",
                },
                {
                  path: "images/tiles/20x20/water_top.png",
                  name: "water_top.png",
                },
                { path: "images/tiles/20x20/wind1.png", name: "wind1.png" },
                { path: "images/tiles/20x20/wind2.png", name: "wind2.png" },
                { path: "images/tiles/20x20/wood.png", name: "wood.png" },
                {
                  path: "images/tiles/20x20/wood_floor.png",
                  name: "wood_floor.png",
                },
                {
                  path: "images/tiles/20x20/workbench.png",
                  name: "workbench.png",
                },
                {
                  path: "images/tiles/20x20/zombie.png",
                  name: "zombie.png",
                },
              ],
            },
            {
              path: "images/tiles/40x40",
              name: "40x40",
              children: [
                { path: "images/tiles/40x40/0.png", name: "0.png" },
                { path: "images/tiles/40x40/1.png", name: "1.png" },
                { path: "images/tiles/40x40/10.png", name: "10.png" },
                { path: "images/tiles/40x40/2.png", name: "2.png" },
                { path: "images/tiles/40x40/3.png", name: "3.png" },
                { path: "images/tiles/40x40/4.png", name: "4.png" },
                { path: "images/tiles/40x40/5.png", name: "5.png" },
                { path: "images/tiles/40x40/6.png", name: "6.png" },
                { path: "images/tiles/40x40/7.png", name: "7.png" },
                { path: "images/tiles/40x40/8.png", name: "8.png" },
                { path: "images/tiles/40x40/9.png", name: "9.png" },
                { path: "images/tiles/40x40/air.png", name: "air.png" },
                { path: "images/tiles/40x40/air1.png", name: "air1.png" },
                { path: "images/tiles/40x40/anvil.png", name: "anvil.png" },
                { path: "images/tiles/40x40/beam.png", name: "beam.png" },
                {
                  path: "images/tiles/40x40/bedrock1.png",
                  name: "bedrock1.png",
                },
                { path: "images/tiles/40x40/block.png", name: "block.png" },
                {
                  path: "images/tiles/40x40/block_break1.png",
                  name: "block_break1.png",
                },
                {
                  path: "images/tiles/40x40/block_break2.png",
                  name: "block_break2.png",
                },
                {
                  path: "images/tiles/40x40/block_break3.png",
                  name: "block_break3.png",
                },
                {
                  path: "images/tiles/40x40/block_break4.png",
                  name: "block_break4.png",
                },
                {
                  path: "images/tiles/40x40/block_break5.png",
                  name: "block_break5.png",
                },
                {
                  path: "images/tiles/40x40/block_break6.png",
                  name: "block_break6.png",
                },
                {
                  path: "images/tiles/40x40/block_break7.png",
                  name: "block_break7.png",
                },
                { path: "images/tiles/40x40/box.png", name: "box.png" },
                { path: "images/tiles/40x40/brick.png", name: "brick.png" },
                {
                  path: "images/tiles/40x40/broken_stone1.png",
                  name: "broken_stone1.png",
                },
                {
                  path: "images/tiles/40x40/bulb_off.png",
                  name: "bulb_off.png",
                },
                {
                  path: "images/tiles/40x40/bulb_on.png",
                  name: "bulb_on.png",
                },
                {
                  path: "images/tiles/40x40/character_l.png",
                  name: "character_l.png",
                },
                {
                  path: "images/tiles/40x40/character_r.png",
                  name: "character_r.png",
                },
                {
                  path: "images/tiles/40x40/character_u.png",
                  name: "character_u.png",
                },
                { path: "images/tiles/40x40/cloud.png", name: "cloud.png" },
                {
                  path: "images/tiles/40x40/cloud1.png",
                  name: "cloud1.png",
                },
                {
                  path: "images/tiles/40x40/cloud2.png",
                  name: "cloud2.png",
                },
                { path: "images/tiles/40x40/coal1.png", name: "coal1.png" },
                { path: "images/tiles/40x40/cog1.png", name: "cog1.png" },
                { path: "images/tiles/40x40/cog2.png", name: "cog2.png" },
                {
                  path: "images/tiles/40x40/computer.png",
                  name: "computer.png",
                },
                {
                  path: "images/tiles/40x40/conveyor_left1.png",
                  name: "conveyor_left1.png",
                },
                {
                  path: "images/tiles/40x40/conveyor_left2.png",
                  name: "conveyor_left2.png",
                },
                {
                  path: "images/tiles/40x40/conveyor_right1.png",
                  name: "conveyor_right1.png",
                },
                {
                  path: "images/tiles/40x40/conveyor_right2.png",
                  name: "conveyor_right2.png",
                },
                {
                  path: "images/tiles/40x40/copper1.png",
                  name: "copper1.png",
                },
                { path: "images/tiles/40x40/dirt.png", name: "dirt.png" },
                { path: "images/tiles/40x40/dirt1.png", name: "dirt1.png" },
                {
                  path: "images/tiles/40x40/dirt_grass.png",
                  name: "dirt_grass.png",
                },
                {
                  path: "images/tiles/40x40/dirt_grass1.png",
                  name: "dirt_grass1.png",
                },
                { path: "images/tiles/40x40/disk1.png", name: "disk1.png" },
                { path: "images/tiles/40x40/disk2.png", name: "disk2.png" },
                {
                  path: "images/tiles/40x40/elevator.png",
                  name: "elevator.png",
                },
                {
                  path: "images/tiles/40x40/elevator2.png",
                  name: "elevator2.png",
                },
                {
                  path: "images/tiles/40x40/end_portal_off.png",
                  name: "end_portal_off.png",
                },
                {
                  path: "images/tiles/40x40/end_portal_on1.png",
                  name: "end_portal_on1.png",
                },
                {
                  path: "images/tiles/40x40/end_portal_on2.png",
                  name: "end_portal_on2.png",
                },
                { path: "images/tiles/40x40/fan1.png", name: "fan1.png" },
                { path: "images/tiles/40x40/fan2.png", name: "fan2.png" },
                { path: "images/tiles/40x40/gold1.png", name: "gold1.png" },
                { path: "images/tiles/40x40/iron1.png", name: "iron1.png" },
                {
                  path: "images/tiles/40x40/ironblock1.png",
                  name: "ironblock1.png",
                },
                {
                  path: "images/tiles/40x40/ladder.png",
                  name: "ladder.png",
                },
                { path: "images/tiles/40x40/lava1.png", name: "lava1.png" },
                { path: "images/tiles/40x40/lava2.png", name: "lava2.png" },
                {
                  path: "images/tiles/40x40/leaves.png",
                  name: "leaves.png",
                },
                {
                  path: "images/tiles/40x40/leaves1.png",
                  name: "leaves1.png",
                },
                {
                  path: "images/tiles/40x40/leaves2.png",
                  name: "leaves2.png",
                },
                {
                  path: "images/tiles/40x40/lelevator1.png",
                  name: "lelevator1.png",
                },
                {
                  path: "images/tiles/40x40/lelevator2.png",
                  name: "lelevator2.png",
                },
                { path: "images/tiles/40x40/mine.png", name: "mine.png" },
                {
                  path: "images/tiles/40x40/monster_left1.png",
                  name: "monster_left1.png",
                },
                {
                  path: "images/tiles/40x40/monster_left2.png",
                  name: "monster_left2.png",
                },
                {
                  path: "images/tiles/40x40/monster_right1.png",
                  name: "monster_right1.png",
                },
                {
                  path: "images/tiles/40x40/monster_right2.png",
                  name: "monster_right2.png",
                },
                { path: "images/tiles/40x40/none.png", name: "none.png" },
                { path: "images/tiles/40x40/npc1.png", name: "npc1.png" },
                { path: "images/tiles/40x40/npc2.png", name: "npc2.png" },
                { path: "images/tiles/40x40/npc3.png", name: "npc3.png" },
                { path: "images/tiles/40x40/npc4.png", name: "npc4.png" },
                { path: "images/tiles/40x40/npc5.png", name: "npc5.png" },
                { path: "images/tiles/40x40/npc6.png", name: "npc6.png" },
                {
                  path: "images/tiles/40x40/pc_bsod.png",
                  name: "pc_bsod.png",
                },
                {
                  path: "images/tiles/40x40/pc_new.png",
                  name: "pc_new.png",
                },
                {
                  path: "images/tiles/40x40/pc_new_off.png",
                  name: "pc_new_off.png",
                },
                {
                  path: "images/tiles/40x40/pc_new_on1.png",
                  name: "pc_new_on1.png",
                },
                {
                  path: "images/tiles/40x40/pc_new_on2.png",
                  name: "pc_new_on2.png",
                },
                {
                  path: "images/tiles/40x40/pc_old.png",
                  name: "pc_old.png",
                },
                {
                  path: "images/tiles/40x40/picture1.png",
                  name: "picture1.png",
                },
                {
                  path: "images/tiles/40x40/platinum1.png",
                  name: "platinum1.png",
                },
                {
                  path: "images/tiles/40x40/plywood.png",
                  name: "plywood.png",
                },
                {
                  path: "images/tiles/40x40/plywood1.png",
                  name: "plywood1.png",
                },
                {
                  path: "images/tiles/40x40/portal1.png",
                  name: "portal1.png",
                },
                {
                  path: "images/tiles/40x40/portal1a.png",
                  name: "portal1a.png",
                },
                {
                  path: "images/tiles/40x40/portal1b.png",
                  name: "portal1b.png",
                },
                {
                  path: "images/tiles/40x40/portal2.png",
                  name: "portal2.png",
                },
                {
                  path: "images/tiles/40x40/portal2a.png",
                  name: "portal2a.png",
                },
                {
                  path: "images/tiles/40x40/portal2b.png",
                  name: "portal2b.png",
                },
                {
                  path: "images/tiles/40x40/portal3.png",
                  name: "portal3.png",
                },
                {
                  path: "images/tiles/40x40/portal3a.png",
                  name: "portal3a.png",
                },
                {
                  path: "images/tiles/40x40/portal3b.png",
                  name: "portal3b.png",
                },
                {
                  path: "images/tiles/40x40/portal4.png",
                  name: "portal4.png",
                },
                {
                  path: "images/tiles/40x40/portal4a.png",
                  name: "portal4a.png",
                },
                {
                  path: "images/tiles/40x40/portal4b.png",
                  name: "portal4b.png",
                },
                {
                  path: "images/tiles/40x40/pretty.png",
                  name: "pretty.png",
                },
                {
                  path: "images/tiles/40x40/relevator1.png",
                  name: "relevator1.png",
                },
                {
                  path: "images/tiles/40x40/relevator2.png",
                  name: "relevator2.png",
                },
                {
                  path: "images/tiles/40x40/sapling1.png",
                  name: "sapling1.png",
                },
                {
                  path: "images/tiles/40x40/server1.png",
                  name: "server1.png",
                },
                {
                  path: "images/tiles/40x40/server2.png",
                  name: "server2.png",
                },
                {
                  path: "images/tiles/40x40/shingle.png",
                  name: "shingle.png",
                },
                { path: "images/tiles/40x40/sign1.png", name: "sign1.png" },
                { path: "images/tiles/40x40/sign2.png", name: "sign2.png" },
                {
                  path: "images/tiles/40x40/silver1.png",
                  name: "silver1.png",
                },
                {
                  path: "images/tiles/40x40/spikes1.png",
                  name: "spikes1.png",
                },
                {
                  path: "images/tiles/40x40/spikes2.png",
                  name: "spikes2.png",
                },
                {
                  path: "images/tiles/40x40/stairs.png",
                  name: "stairs.png",
                },
                { path: "images/tiles/40x40/start.png", name: "start.png" },
                { path: "images/tiles/40x40/stone.png", name: "stone.png" },
                {
                  path: "images/tiles/40x40/stone1.png",
                  name: "stone1.png",
                },
                {
                  path: "images/tiles/40x40/stone_block.png",
                  name: "stone_block.png",
                },
                {
                  path: "images/tiles/40x40/stoneblock.png",
                  name: "stoneblock.png",
                },
                {
                  path: "images/tiles/40x40/stoneblock1.png",
                  name: "stoneblock1.png",
                },
                {
                  path: "images/tiles/40x40/switchoff.png",
                  name: "switchoff.png",
                },
                {
                  path: "images/tiles/40x40/switchon.png",
                  name: "switchon.png",
                },
                {
                  path: "images/tiles/40x40/tallgrass1.png",
                  name: "tallgrass1.png",
                },
                {
                  path: "images/tiles/40x40/tallgrass2.png",
                  name: "tallgrass2.png",
                },
                {
                  path: "images/tiles/40x40/torch1.png",
                  name: "torch1.png",
                },
                {
                  path: "images/tiles/40x40/torch2.png",
                  name: "torch2.png",
                },
                { path: "images/tiles/40x40/tree.png", name: "tree.png" },
                { path: "images/tiles/40x40/tree1.png", name: "tree1.png" },
                {
                  path: "images/tiles/40x40/water1.png",
                  name: "water1.png",
                },
                {
                  path: "images/tiles/40x40/water2.png",
                  name: "water2.png",
                },
                {
                  path: "images/tiles/40x40/water_top1.png",
                  name: "water_top1.png",
                },
                { path: "images/tiles/40x40/wind1.png", name: "wind1.png" },
                { path: "images/tiles/40x40/wind2.png", name: "wind2.png" },
                { path: "images/tiles/40x40/wood.png", name: "wood.png" },
                {
                  path: "images/tiles/40x40/workbench1.png",
                  name: "workbench1.png",
                },
                {
                  path: "images/tiles/40x40/zombie.png",
                  name: "zombie.png",
                },
              ],
            },
            {
              path: "images/tiles/64x64",
              name: "64x64",
              children: [
                { path: "images/tiles/64x64/allan.png", name: "allan.png" },
                { path: "images/tiles/64x64/asdf.png", name: "asdf.png" },
                {
                  path: "images/tiles/64x64/asphalt_grass.png",
                  name: "asphalt_grass.png",
                },
                { path: "images/tiles/64x64/beak.png", name: "beak.png" },
                { path: "images/tiles/64x64/bed1.png", name: "bed1.png" },
                { path: "images/tiles/64x64/bed2.png", name: "bed2.png" },
                { path: "images/tiles/64x64/bed3.png", name: "bed3.png" },
                { path: "images/tiles/64x64/blade.png", name: "blade.png" },
                {
                  path: "images/tiles/64x64/blades1.png",
                  name: "blades1.png",
                },
                {
                  path: "images/tiles/64x64/blue_wallpaper.png",
                  name: "blue_wallpaper.png",
                },
                {
                  path: "images/tiles/64x64/blue_wallpaper_bottom.png",
                  name: "blue_wallpaper_bottom.png",
                },
                { path: "images/tiles/64x64/book.png", name: "book.png" },
                { path: "images/tiles/64x64/brick.png", name: "brick.png" },
                {
                  path: "images/tiles/64x64/brick_1.png",
                  name: "brick_1.png",
                },
                {
                  path: "images/tiles/64x64/brick_cracked.png",
                  name: "brick_cracked.png",
                },
                {
                  path: "images/tiles/64x64/brick_door_1.png",
                  name: "brick_door_1.png",
                },
                {
                  path: "images/tiles/64x64/brick_door_2.png",
                  name: "brick_door_2.png",
                },
                {
                  path: "images/tiles/64x64/brick_left.png",
                  name: "brick_left.png",
                },
                {
                  path: "images/tiles/64x64/brick_red.png",
                  name: "brick_red.png",
                },
                {
                  path: "images/tiles/64x64/brick_right.png",
                  name: "brick_right.png",
                },
                {
                  path: "images/tiles/64x64/brick_top.png",
                  name: "brick_top.png",
                },
                {
                  path: "images/tiles/64x64/brick_top_left.png",
                  name: "brick_top_left.png",
                },
                {
                  path: "images/tiles/64x64/brick_top_right.png",
                  name: "brick_top_right.png",
                },
                {
                  path: "images/tiles/64x64/brick_window_1.png",
                  name: "brick_window_1.png",
                },
                {
                  path: "images/tiles/64x64/brown_door_1.png",
                  name: "brown_door_1.png",
                },
                {
                  path: "images/tiles/64x64/brown_door_2.png",
                  name: "brown_door_2.png",
                },
                { path: "images/tiles/64x64/car_1.png", name: "car_1.png" },
                {
                  path: "images/tiles/64x64/carpet.png",
                  name: "carpet.png",
                },
                {
                  path: "images/tiles/64x64/carpet_top.png",
                  name: "carpet_top.png",
                },
                {
                  path: "images/tiles/64x64/cement.png",
                  name: "cement.png",
                },
                {
                  path: "images/tiles/64x64/cement_1.png",
                  name: "cement_1.png",
                },
                {
                  path: "images/tiles/64x64/cement_2.png",
                  name: "cement_2.png",
                },
                {
                  path: "images/tiles/64x64/cement_3.png",
                  name: "cement_3.png",
                },
                {
                  path: "images/tiles/64x64/cement_4.png",
                  name: "cement_4.png",
                },
                {
                  path: "images/tiles/64x64/cement_5.png",
                  name: "cement_5.png",
                },
                {
                  path: "images/tiles/64x64/cement_6.png",
                  name: "cement_6.png",
                },
                {
                  path: "images/tiles/64x64/cement_7.png",
                  name: "cement_7.png",
                },
                {
                  path: "images/tiles/64x64/cement_8.png",
                  name: "cement_8.png",
                },
                {
                  path: "images/tiles/64x64/cement_9.png",
                  name: "cement_9.png",
                },
                {
                  path: "images/tiles/64x64/cement_radioactive_1.png",
                  name: "cement_radioactive_1.png",
                },
                {
                  path: "images/tiles/64x64/cement_radioactive_2.png",
                  name: "cement_radioactive_2.png",
                },
                {
                  path: "images/tiles/64x64/cement_radioactive_3.png",
                  name: "cement_radioactive_3.png",
                },
                {
                  path: "images/tiles/64x64/cement_radioactive_4.png",
                  name: "cement_radioactive_4.png",
                },
                {
                  path: "images/tiles/64x64/cement_wood.png",
                  name: "cement_wood.png",
                },
                {
                  path: "images/tiles/64x64/checkpoint0.png",
                  name: "checkpoint0.png",
                },
                {
                  path: "images/tiles/64x64/checkpoint1.png",
                  name: "checkpoint1.png",
                },
                {
                  path: "images/tiles/64x64/checkpoint2.png",
                  name: "checkpoint2.png",
                },
                {
                  path: "images/tiles/64x64/checkpoint3.png",
                  name: "checkpoint3.png",
                },
                {
                  path: "images/tiles/64x64/chicken_1.png",
                  name: "chicken_1.png",
                },
                {
                  path: "images/tiles/64x64/chicken_2.png",
                  name: "chicken_2.png",
                },
                {
                  path: "images/tiles/64x64/chicken_3.png",
                  name: "chicken_3.png",
                },
                {
                  path: "images/tiles/64x64/chicken_4.png",
                  name: "chicken_4.png",
                },
                { path: "images/tiles/64x64/claw1.png", name: "claw1.png" },
                { path: "images/tiles/64x64/claw2.png", name: "claw2.png" },
                { path: "images/tiles/64x64/claw3.png", name: "claw3.png" },
                { path: "images/tiles/64x64/claw4.png", name: "claw4.png" },
                {
                  path: "images/tiles/64x64/cloud_1.png",
                  name: "cloud_1.png",
                },
                {
                  path: "images/tiles/64x64/cover_1.png",
                  name: "cover_1.png",
                },
                {
                  path: "images/tiles/64x64/cover_2.png",
                  name: "cover_2.png",
                },
                {
                  path: "images/tiles/64x64/crate1_1.png",
                  name: "crate1_1.png",
                },
                {
                  path: "images/tiles/64x64/crate1_2.png",
                  name: "crate1_2.png",
                },
                {
                  path: "images/tiles/64x64/crate1_3.png",
                  name: "crate1_3.png",
                },
                {
                  path: "images/tiles/64x64/crate1_4.png",
                  name: "crate1_4.png",
                },
                {
                  path: "images/tiles/64x64/crate1_5.png",
                  name: "crate1_5.png",
                },
                { path: "images/tiles/64x64/dice.png", name: "dice.png" },
                { path: "images/tiles/64x64/dirt.png", name: "dirt.png" },
                {
                  path: "images/tiles/64x64/dirt_hd.png",
                  name: "dirt_hd.png",
                },
                {
                  path: "images/tiles/64x64/door_1.png",
                  name: "door_1.png",
                },
                {
                  path: "images/tiles/64x64/door_2.png",
                  name: "door_2.png",
                },
                {
                  path: "images/tiles/64x64/element0.png",
                  name: "element0.png",
                },
                {
                  path: "images/tiles/64x64/element1.png",
                  name: "element1.png",
                },
                {
                  path: "images/tiles/64x64/element2.png",
                  name: "element2.png",
                },
                {
                  path: "images/tiles/64x64/element3.png",
                  name: "element3.png",
                },
                {
                  path: "images/tiles/64x64/elevator_control.png",
                  name: "elevator_control.png",
                },
                {
                  path: "images/tiles/64x64/elevator_shroud_1.png",
                  name: "elevator_shroud_1.png",
                },
                {
                  path: "images/tiles/64x64/elevator_shroud_2.png",
                  name: "elevator_shroud_2.png",
                },
                {
                  path: "images/tiles/64x64/elevator_shroud_3.png",
                  name: "elevator_shroud_3.png",
                },
                {
                  path: "images/tiles/64x64/elevator_shroud_4.png",
                  name: "elevator_shroud_4.png",
                },
                {
                  path: "images/tiles/64x64/elevator_shroud_5.png",
                  name: "elevator_shroud_5.png",
                },
                {
                  path: "images/tiles/64x64/elevator_shroud_6.png",
                  name: "elevator_shroud_6.png",
                },
                {
                  path: "images/tiles/64x64/energydrink.png",
                  name: "energydrink.png",
                },
                {
                  path: "images/tiles/64x64/faucet.png",
                  name: "faucet.png",
                },
                { path: "images/tiles/64x64/fence.png", name: "fence.png" },
                {
                  path: "images/tiles/64x64/finish.png",
                  name: "finish.png",
                },
                {
                  path: "images/tiles/64x64/fire_0.png",
                  name: "fire_0.png",
                },
                {
                  path: "images/tiles/64x64/fire_1.png",
                  name: "fire_1.png",
                },
                {
                  path: "images/tiles/64x64/fire_2.png",
                  name: "fire_2.png",
                },
                {
                  path: "images/tiles/64x64/fire_3.png",
                  name: "fire_3.png",
                },
                {
                  path: "images/tiles/64x64/generator.png",
                  name: "generator.png",
                },
                {
                  path: "images/tiles/64x64/generator2.png",
                  name: "generator2.png",
                },
                {
                  path: "images/tiles/64x64/generator3.png",
                  name: "generator3.png",
                },
                {
                  path: "images/tiles/64x64/generator4.png",
                  name: "generator4.png",
                },
                {
                  path: "images/tiles/64x64/generator_2.png",
                  name: "generator_2.png",
                },
                {
                  path: "images/tiles/64x64/generator_3.png",
                  name: "generator_3.png",
                },
                {
                  path: "images/tiles/64x64/generator_4.png",
                  name: "generator_4.png",
                },
                {
                  path: "images/tiles/64x64/gerald.png",
                  name: "gerald.png",
                },
                { path: "images/tiles/64x64/glass.png", name: "glass.png" },
                {
                  path: "images/tiles/64x64/glass_cup.png",
                  name: "glass_cup.png",
                },
                {
                  path: "images/tiles/64x64/glasses.png",
                  name: "glasses.png",
                },
                {
                  path: "images/tiles/64x64/gordonforscale.png",
                  name: "gordonforscale.png",
                },
                { path: "images/tiles/64x64/grass.png", name: "grass.png" },
                {
                  path: "images/tiles/64x64/grass_1.png",
                  name: "grass_1.png",
                },
                {
                  path: "images/tiles/64x64/grass_3.png",
                  name: "grass_3.png",
                },
                {
                  path: "images/tiles/64x64/grass_dirt.png",
                  name: "grass_dirt.png",
                },
                { path: "images/tiles/64x64/grey.png", name: "grey.png" },
                {
                  path: "images/tiles/64x64/grey_dark.png",
                  name: "grey_dark.png",
                },
                {
                  path: "images/tiles/64x64/grey_dark_top_left.png",
                  name: "grey_dark_top_left.png",
                },
                {
                  path: "images/tiles/64x64/grey_dark_top_right.png",
                  name: "grey_dark_top_right.png",
                },
                {
                  path: "images/tiles/64x64/grey_shadow_bottom_left.png",
                  name: "grey_shadow_bottom_left.png",
                },
                {
                  path: "images/tiles/64x64/grey_shadow_left.png",
                  name: "grey_shadow_left.png",
                },
                {
                  path: "images/tiles/64x64/grey_shadow_top.png",
                  name: "grey_shadow_top.png",
                },
                {
                  path: "images/tiles/64x64/grey_shadow_top_left.png",
                  name: "grey_shadow_top_left.png",
                },
                {
                  path: "images/tiles/64x64/grey_shadow_top_left_corner.png",
                  name: "grey_shadow_top_left_corner.png",
                },
                {
                  path: "images/tiles/64x64/grey_shadow_top_right.png",
                  name: "grey_shadow_top_right.png",
                },
                {
                  path: "images/tiles/64x64/heat_panel1.png",
                  name: "heat_panel1.png",
                },
                {
                  path: "images/tiles/64x64/heat_panel2.png",
                  name: "heat_panel2.png",
                },
                {
                  path: "images/tiles/64x64/heat_panel3.png",
                  name: "heat_panel3.png",
                },
                {
                  path: "images/tiles/64x64/heat_panel4.png",
                  name: "heat_panel4.png",
                },
                { path: "images/tiles/64x64/jam.png", name: "jam.png" },
                { path: "images/tiles/64x64/lamp.png", name: "lamp.png" },
                { path: "images/tiles/64x64/light.png", name: "light.png" },
                {
                  path: "images/tiles/64x64/light_cage_1.png",
                  name: "light_cage_1.png",
                },
                {
                  path: "images/tiles/64x64/light_cage_2.png",
                  name: "light_cage_2.png",
                },
                {
                  path: "images/tiles/64x64/light_cage_3.png",
                  name: "light_cage_3.png",
                },
                {
                  path: "images/tiles/64x64/light_cage_4.png",
                  name: "light_cage_4.png",
                },
                {
                  path: "images/tiles/64x64/mailbox_1.png",
                  name: "mailbox_1.png",
                },
                {
                  path: "images/tiles/64x64/mailbox_2.png",
                  name: "mailbox_2.png",
                },
                {
                  path: "images/tiles/64x64/medpack.png",
                  name: "medpack.png",
                },
                {
                  path: "images/tiles/64x64/minigun.png",
                  name: "minigun.png",
                },
                {
                  path: "images/tiles/64x64/mousetrap_1.png",
                  name: "mousetrap_1.png",
                },
                {
                  path: "images/tiles/64x64/mousetrap_2.png",
                  name: "mousetrap_2.png",
                },
                { path: "images/tiles/64x64/mp5.png", name: "mp5.png" },
                {
                  path: "images/tiles/64x64/ovenfill.png",
                  name: "ovenfill.png",
                },
                {
                  path: "images/tiles/64x64/ovenleft.png",
                  name: "ovenleft.png",
                },
                {
                  path: "images/tiles/64x64/ovenmiddle0.png",
                  name: "ovenmiddle0.png",
                },
                {
                  path: "images/tiles/64x64/ovenmiddle1.png",
                  name: "ovenmiddle1.png",
                },
                {
                  path: "images/tiles/64x64/ovenright.png",
                  name: "ovenright.png",
                },
                {
                  path: "images/tiles/64x64/oventop.png",
                  name: "oventop.png",
                },
                { path: "images/tiles/64x64/paper.png", name: "paper.png" },
                {
                  path: "images/tiles/64x64/paper_hd.png",
                  name: "paper_hd.png",
                },
                {
                  path: "images/tiles/64x64/paw_extension1.png",
                  name: "paw_extension1.png",
                },
                {
                  path: "images/tiles/64x64/paw_extension2.png",
                  name: "paw_extension2.png",
                },
                {
                  path: "images/tiles/64x64/paw_extension3.png",
                  name: "paw_extension3.png",
                },
                {
                  path: "images/tiles/64x64/paw_extension4.png",
                  name: "paw_extension4.png",
                },
                {
                  path: "images/tiles/64x64/pillow.png",
                  name: "pillow.png",
                },
                { path: "images/tiles/64x64/pipe.png", name: "pipe.png" },
                {
                  path: "images/tiles/64x64/pipe_1.png",
                  name: "pipe_1.png",
                },
                {
                  path: "images/tiles/64x64/pipe_10.png",
                  name: "pipe_10.png",
                },
                {
                  path: "images/tiles/64x64/pipe_11.png",
                  name: "pipe_11.png",
                },
                {
                  path: "images/tiles/64x64/pipe_12.png",
                  name: "pipe_12.png",
                },
                {
                  path: "images/tiles/64x64/pipe_13.png",
                  name: "pipe_13.png",
                },
                {
                  path: "images/tiles/64x64/pipe_14.png",
                  name: "pipe_14.png",
                },
                {
                  path: "images/tiles/64x64/pipe_15.png",
                  name: "pipe_15.png",
                },
                {
                  path: "images/tiles/64x64/pipe_1_hd.png",
                  name: "pipe_1_hd.png",
                },
                {
                  path: "images/tiles/64x64/pipe_2.png",
                  name: "pipe_2.png",
                },
                {
                  path: "images/tiles/64x64/pipe_2_hd.png",
                  name: "pipe_2_hd.png",
                },
                {
                  path: "images/tiles/64x64/pipe_3.png",
                  name: "pipe_3.png",
                },
                {
                  path: "images/tiles/64x64/pipe_4.png",
                  name: "pipe_4.png",
                },
                {
                  path: "images/tiles/64x64/pipe_5.png",
                  name: "pipe_5.png",
                },
                {
                  path: "images/tiles/64x64/pipe_6.png",
                  name: "pipe_6.png",
                },
                {
                  path: "images/tiles/64x64/pipe_7.png",
                  name: "pipe_7.png",
                },
                {
                  path: "images/tiles/64x64/pipe_8.png",
                  name: "pipe_8.png",
                },
                {
                  path: "images/tiles/64x64/pipe_8_1.png",
                  name: "pipe_8_1.png",
                },
                {
                  path: "images/tiles/64x64/pipe_8_2.png",
                  name: "pipe_8_2.png",
                },
                {
                  path: "images/tiles/64x64/pipe_8_3.png",
                  name: "pipe_8_3.png",
                },
                {
                  path: "images/tiles/64x64/pipe_8_4.png",
                  name: "pipe_8_4.png",
                },
                {
                  path: "images/tiles/64x64/pipe_9.png",
                  name: "pipe_9.png",
                },
                {
                  path: "images/tiles/64x64/pipe_9_1.png",
                  name: "pipe_9_1.png",
                },
                {
                  path: "images/tiles/64x64/pipe_9_2.png",
                  name: "pipe_9_2.png",
                },
                {
                  path: "images/tiles/64x64/pipe_9_3.png",
                  name: "pipe_9_3.png",
                },
                {
                  path: "images/tiles/64x64/pipe_9_4.png",
                  name: "pipe_9_4.png",
                },
                {
                  path: "images/tiles/64x64/pipe_broken_steam_1.png",
                  name: "pipe_broken_steam_1.png",
                },
                {
                  path: "images/tiles/64x64/pipe_top.png",
                  name: "pipe_top.png",
                },
                {
                  path: "images/tiles/64x64/pistol.png",
                  name: "pistol.png",
                },
                {
                  path: "images/tiles/64x64/pistol_box.png",
                  name: "pistol_box.png",
                },
                {
                  path: "images/tiles/64x64/pistol_magazine.png",
                  name: "pistol_magazine.png",
                },
                { path: "images/tiles/64x64/plate.png", name: "plate.png" },
                {
                  path: "images/tiles/64x64/plate_stack.png",
                  name: "plate_stack.png",
                },
                {
                  path: "images/tiles/64x64/poster.png",
                  name: "poster.png",
                },
                { path: "images/tiles/64x64/ppsh.png", name: "ppsh.png" },
                {
                  path: "images/tiles/64x64/red_cloth.png",
                  name: "red_cloth.png",
                },
                {
                  path: "images/tiles/64x64/remington.png",
                  name: "remington.png",
                },
                {
                  path: "images/tiles/64x64/roof_1.png",
                  name: "roof_1.png",
                },
                {
                  path: "images/tiles/64x64/roof_2.png",
                  name: "roof_2.png",
                },
                {
                  path: "images/tiles/64x64/roof_3.png",
                  name: "roof_3.png",
                },
                {
                  path: "images/tiles/64x64/roof_4.png",
                  name: "roof_4.png",
                },
                {
                  path: "images/tiles/64x64/roof_5.png",
                  name: "roof_5.png",
                },
                {
                  path: "images/tiles/64x64/roof_6.png",
                  name: "roof_6.png",
                },
                {
                  path: "images/tiles/64x64/roof_chimney.png",
                  name: "roof_chimney.png",
                },
                {
                  path: "images/tiles/64x64/roof_chimney_1.png",
                  name: "roof_chimney_1.png",
                },
                {
                  path: "images/tiles/64x64/roof_chimney_2.png",
                  name: "roof_chimney_2.png",
                },
                {
                  path: "images/tiles/64x64/roof_chimney_3.png",
                  name: "roof_chimney_3.png",
                },
                {
                  path: "images/tiles/64x64/roof_chimney_4.png",
                  name: "roof_chimney_4.png",
                },
                {
                  path: "images/tiles/64x64/sidewalk.png",
                  name: "sidewalk.png",
                },
                { path: "images/tiles/64x64/sky_1.png", name: "sky_1.png" },
                { path: "images/tiles/64x64/spawn.png", name: "spawn.png" },
                {
                  path: "images/tiles/64x64/spawn1.png",
                  name: "spawn1.png",
                },
                {
                  path: "images/tiles/64x64/spawn2.png",
                  name: "spawn2.png",
                },
                {
                  path: "images/tiles/64x64/spawn3.png",
                  name: "spawn3.png",
                },
                {
                  path: "images/tiles/64x64/spawn4.png",
                  name: "spawn4.png",
                },
                {
                  path: "images/tiles/64x64/spawn_mutant.png",
                  name: "spawn_mutant.png",
                },
                {
                  path: "images/tiles/64x64/stained_glass.png",
                  name: "stained_glass.png",
                },
                {
                  path: "images/tiles/64x64/statue.png",
                  name: "statue.png",
                },
                {
                  path: "images/tiles/64x64/table_cover.png",
                  name: "table_cover.png",
                },
                { path: "images/tiles/64x64/tack.png", name: "tack.png" },
                {
                  path: "images/tiles/64x64/tallgrass_1.png",
                  name: "tallgrass_1.png",
                },
                {
                  path: "images/tiles/64x64/temperature_1.png",
                  name: "temperature_1.png",
                },
                {
                  path: "images/tiles/64x64/temperature_2.png",
                  name: "temperature_2.png",
                },
                { path: "images/tiles/64x64/tile.png", name: "tile.png" },
                {
                  path: "images/tiles/64x64/tile_dark.png",
                  name: "tile_dark.png",
                },
                {
                  path: "images/tiles/64x64/tile_dark_top_left.png",
                  name: "tile_dark_top_left.png",
                },
                {
                  path: "images/tiles/64x64/tile_dark_top_right.png",
                  name: "tile_dark_top_right.png",
                },
                {
                  path: "images/tiles/64x64/tile_hadow_top.png",
                  name: "tile_hadow_top.png",
                },
                {
                  path: "images/tiles/64x64/tile_lamp.png",
                  name: "tile_lamp.png",
                },
                {
                  path: "images/tiles/64x64/tile_shadow_bottom_left.png",
                  name: "tile_shadow_bottom_left.png",
                },
                {
                  path: "images/tiles/64x64/tile_shadow_left.png",
                  name: "tile_shadow_left.png",
                },
                {
                  path: "images/tiles/64x64/tile_shadow_top_left.png",
                  name: "tile_shadow_top_left.png",
                },
                {
                  path: "images/tiles/64x64/tile_shadow_top_left_corner.png",
                  name: "tile_shadow_top_left_corner.png",
                },
                {
                  path: "images/tiles/64x64/tile_shadow_top_right.png",
                  name: "tile_shadow_top_right.png",
                },
                {
                  path: "images/tiles/64x64/toast_legit.png",
                  name: "toast_legit.png",
                },
                {
                  path: "images/tiles/64x64/toaster_block.png",
                  name: "toaster_block.png",
                },
                {
                  path: "images/tiles/64x64/toaster_center.png",
                  name: "toaster_center.png",
                },
                {
                  path: "images/tiles/64x64/toaster_left.png",
                  name: "toaster_left.png",
                },
                {
                  path: "images/tiles/64x64/toaster_right.png",
                  name: "toaster_right.png",
                },
                {
                  path: "images/tiles/64x64/wallpaper_1.png",
                  name: "wallpaper_1.png",
                },
                { path: "images/tiles/64x64/water.png", name: "water.png" },
                {
                  path: "images/tiles/64x64/water_1.png",
                  name: "water_1.png",
                },
                {
                  path: "images/tiles/64x64/water_2.png",
                  name: "water_2.png",
                },
                {
                  path: "images/tiles/64x64/water_3.png",
                  name: "water_3.png",
                },
                {
                  path: "images/tiles/64x64/water_4.png",
                  name: "water_4.png",
                },
                {
                  path: "images/tiles/64x64/water_cement_left_1.png",
                  name: "water_cement_left_1.png",
                },
                {
                  path: "images/tiles/64x64/water_cement_left_2.png",
                  name: "water_cement_left_2.png",
                },
                {
                  path: "images/tiles/64x64/water_cement_left_3.png",
                  name: "water_cement_left_3.png",
                },
                {
                  path: "images/tiles/64x64/water_cement_middle.png",
                  name: "water_cement_middle.png",
                },
                {
                  path: "images/tiles/64x64/water_cement_right_1.png",
                  name: "water_cement_right_1.png",
                },
                {
                  path: "images/tiles/64x64/water_cement_right_2.png",
                  name: "water_cement_right_2.png",
                },
                {
                  path: "images/tiles/64x64/water_cement_right_3.png",
                  name: "water_cement_right_3.png",
                },
                {
                  path: "images/tiles/64x64/water_deep.png",
                  name: "water_deep.png",
                },
                {
                  path: "images/tiles/64x64/water_hd.png",
                  name: "water_hd.png",
                },
                {
                  path: "images/tiles/64x64/white_tile.png",
                  name: "white_tile.png",
                },
                {
                  path: "images/tiles/64x64/wires0.png",
                  name: "wires0.png",
                },
                {
                  path: "images/tiles/64x64/wires1.png",
                  name: "wires1.png",
                },
                {
                  path: "images/tiles/64x64/wires2.png",
                  name: "wires2.png",
                },
                {
                  path: "images/tiles/64x64/wires3.png",
                  name: "wires3.png",
                },
                { path: "images/tiles/64x64/wood.png", name: "wood.png" },
                {
                  path: "images/tiles/64x64/wood_light.png",
                  name: "wood_light.png",
                },
              ],
            },
            {
              path: "images/tiles/70x70",
              name: "70x70",
              children: [
                {
                  path: "images/tiles/70x70/ground10_dark.png",
                  name: "ground10_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground10_mars.png",
                  name: "ground10_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground10_moon.png",
                  name: "ground10_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground10_sun.png",
                  name: "ground10_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground11_dark.png",
                  name: "ground11_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground11_mars.png",
                  name: "ground11_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground11_moon.png",
                  name: "ground11_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground11_sun.png",
                  name: "ground11_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground12_dark.png",
                  name: "ground12_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground12_mars.png",
                  name: "ground12_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground12_moon.png",
                  name: "ground12_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground12_sun.png",
                  name: "ground12_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground1_dark.png",
                  name: "ground1_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground1_mars.png",
                  name: "ground1_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground1_moon.png",
                  name: "ground1_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground1_sun.png",
                  name: "ground1_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground2_dark.png",
                  name: "ground2_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground2_mars.png",
                  name: "ground2_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground2_moon.png",
                  name: "ground2_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground2_sun.png",
                  name: "ground2_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground3_dark.png",
                  name: "ground3_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground3_mars.png",
                  name: "ground3_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground3_moon.png",
                  name: "ground3_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground3_sun.png",
                  name: "ground3_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground4_dark.png",
                  name: "ground4_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground4_mars.png",
                  name: "ground4_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground4_moon.png",
                  name: "ground4_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground4_sun.png",
                  name: "ground4_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground5_dark.png",
                  name: "ground5_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground5_mars.png",
                  name: "ground5_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground5_moon.png",
                  name: "ground5_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground5_sun.png",
                  name: "ground5_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground6_dark.png",
                  name: "ground6_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground6_mars.png",
                  name: "ground6_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground6_moon.png",
                  name: "ground6_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground6_sun.png",
                  name: "ground6_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground7_dark.png",
                  name: "ground7_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground7_mars.png",
                  name: "ground7_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground7_moon.png",
                  name: "ground7_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground7_sun.png",
                  name: "ground7_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground8_dark.png",
                  name: "ground8_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground8_mars.png",
                  name: "ground8_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground8_moon.png",
                  name: "ground8_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground8_sun.png",
                  name: "ground8_sun.png",
                },
                {
                  path: "images/tiles/70x70/ground9_dark.png",
                  name: "ground9_dark.png",
                },
                {
                  path: "images/tiles/70x70/ground9_mars.png",
                  name: "ground9_mars.png",
                },
                {
                  path: "images/tiles/70x70/ground9_moon.png",
                  name: "ground9_moon.png",
                },
                {
                  path: "images/tiles/70x70/ground9_sun.png",
                  name: "ground9_sun.png",
                },
              ],
            },
            {
              path: "images/tiles/80x80",
              name: "80x80",
              children: [
                { path: "images/tiles/80x80/blue.png", name: "blue.png" },
                { path: "images/tiles/80x80/flash.png", name: "flash.png" },
                { path: "images/tiles/80x80/green.png", name: "green.png" },
                {
                  path: "images/tiles/80x80/orange.png",
                  name: "orange.png",
                },
                {
                  path: "images/tiles/80x80/purple.png",
                  name: "purple.png",
                },
                { path: "images/tiles/80x80/red.png", name: "red.png" },
                {
                  path: "images/tiles/80x80/yellow.png",
                  name: "yellow.png",
                },
              ],
            },
            {
              path: "images/tiles/isometric",
              name: "isometric",
              children: [
                {
                  path: "images/tiles/isometric/grass1.png",
                  name: "grass1.png",
                },
                {
                  path: "images/tiles/isometric/grass2.png",
                  name: "grass2.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_corner_inward1.png",
                  name: "grass_slope_corner_inward1.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_corner_inward2.png",
                  name: "grass_slope_corner_inward2.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_corner_outward1.png",
                  name: "grass_slope_corner_outward1.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_corner_outward2.png",
                  name: "grass_slope_corner_outward2.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_left1.png",
                  name: "grass_slope_left1.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_left2.png",
                  name: "grass_slope_left2.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_peak1.png",
                  name: "grass_slope_peak1.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_peak2.png",
                  name: "grass_slope_peak2.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_right1.png",
                  name: "grass_slope_right1.png",
                },
                {
                  path: "images/tiles/isometric/grass_slope_right2.png",
                  name: "grass_slope_right2.png",
                },
                {
                  path: "images/tiles/isometric/johnny.png",
                  name: "johnny.png",
                },
                {
                  path: "images/tiles/isometric/person.png",
                  name: "person.png",
                },
                {
                  path: "images/tiles/isometric/rock1.png",
                  name: "rock1.png",
                },
                {
                  path: "images/tiles/isometric/template.png",
                  name: "template.png",
                },
                {
                  path: "images/tiles/isometric/water1.png",
                  name: "water1.png",
                },
                {
                  path: "images/tiles/isometric/water2.png",
                  name: "water2.png",
                },
              ],
            },
            {
              path: "images/tiles/perspective",
              name: "perspective",
              children: [
                {
                  path: "images/tiles/perspective/box.png",
                  name: "box.png",
                },
                {
                  path: "images/tiles/perspective/broom.png",
                  name: "broom.png",
                },
                {
                  path: "images/tiles/perspective/character_down.png",
                  name: "character_down.png",
                },
                {
                  path: "images/tiles/perspective/character_left.png",
                  name: "character_left.png",
                },
                {
                  path: "images/tiles/perspective/character_old.png",
                  name: "character_old.png",
                },
                {
                  path: "images/tiles/perspective/character_right.png",
                  name: "character_right.png",
                },
                {
                  path: "images/tiles/perspective/character_up.png",
                  name: "character_up.png",
                },
                {
                  path: "images/tiles/perspective/garbagecan.png",
                  name: "garbagecan.png",
                },
                {
                  path: "images/tiles/perspective/janitor_room.png",
                  name: "janitor_room.png",
                },
                {
                  path: "images/tiles/perspective/janitor_room_open.png",
                  name: "janitor_room_open.png",
                },
                {
                  path: "images/tiles/perspective/robot.png",
                  name: "robot.png",
                },
                {
                  path: "images/tiles/perspective/scrap.png",
                  name: "scrap.png",
                },
                {
                  path: "images/tiles/perspective/wall.png",
                  name: "wall.png",
                },
                {
                  path: "images/tiles/perspective/wall2.png",
                  name: "wall2.png",
                },
              ],
            },
          ],
        },
        {
          path: "images/ui",
          name: "ui",
          children: [
            { path: "images/ui/back_button.png", name: "back_button.png" },
            {
              path: "images/ui/buttons",
              name: "buttons",
              children: [
                {
                  path: "images/ui/buttons/button.png",
                  name: "button.png",
                },
                {
                  path: "images/ui/buttons/button_blue.png",
                  name: "button_blue.png",
                },
                {
                  path: "images/ui/buttons/button_blue_hover.png",
                  name: "button_blue_hover.png",
                },
                {
                  path: "images/ui/buttons/button_green.png",
                  name: "button_green.png",
                },
                {
                  path: "images/ui/buttons/button_green_hover.png",
                  name: "button_green_hover.png",
                },
                {
                  path: "images/ui/buttons/button_orange.png",
                  name: "button_orange.png",
                },
                {
                  path: "images/ui/buttons/button_purple.png",
                  name: "button_purple.png",
                },
                {
                  path: "images/ui/buttons/button_purple_hover.png",
                  name: "button_purple_hover.png",
                },
                {
                  path: "images/ui/buttons/button_red.png",
                  name: "button_red.png",
                },
                {
                  path: "images/ui/buttons/button_red_hover.png",
                  name: "button_red_hover.png",
                },
                {
                  path: "images/ui/buttons/button_wood.png",
                  name: "button_wood.png",
                },
                {
                  path: "images/ui/buttons/button_yellow.png",
                  name: "button_yellow.png",
                },
                {
                  path: "images/ui/buttons/button_yellow_hover.png",
                  name: "button_yellow_hover.png",
                },
              ],
            },
            { path: "images/ui/credits.png", name: "credits.png" },
            {
              path: "images/ui/credits_button.png",
              name: "credits_button.png",
            },
            { path: "images/ui/debug.png", name: "debug.png" },
            { path: "images/ui/exit.png", name: "exit.png" },
            {
              path: "images/ui/fullscreen_toggle.png",
              name: "fullscreen_toggle.png",
            },
            { path: "images/ui/help_button.png", name: "help_button.png" },
            { path: "images/ui/help_screen.png", name: "help_screen.png" },
            {
              path: "images/ui/highscores_table.png",
              name: "highscores_table.png",
            },
            {
              path: "images/ui/keyboard_button.png",
              name: "keyboard_button.png",
            },
            { path: "images/ui/lose.png", name: "lose.png" },
            {
              path: "images/ui/mouse_button.png",
              name: "mouse_button.png",
            },
            { path: "images/ui/music_off.png", name: "music_off.png" },
            { path: "images/ui/music_on.png", name: "music_on.png" },
            { path: "images/ui/options.png", name: "options.png" },
            {
              path: "images/ui/particle_button.png",
              name: "particle_button.png",
            },
            {
              path: "images/ui/particle_button_circle.png",
              name: "particle_button_circle.png",
            },
            {
              path: "images/ui/particle_button_square.png",
              name: "particle_button_square.png",
            },
            {
              path: "images/ui/particle_off_button.png",
              name: "particle_off_button.png",
            },
            { path: "images/ui/pause_menu.png", name: "pause_menu.png" },
            { path: "images/ui/play.png", name: "play.png" },
            { path: "images/ui/power_off.png", name: "power_off.png" },
            {
              path: "images/ui/resume_button.png",
              name: "resume_button.png",
            },
            {
              path: "images/ui/screenshot_off.png",
              name: "screenshot_off.png",
            },
            {
              path: "images/ui/screenshot_on.png",
              name: "screenshot_on.png",
            },
            { path: "images/ui/slidee.png", name: "slidee.png" },
            { path: "images/ui/slider.png", name: "slider.png" },
            { path: "images/ui/sound_off.png", name: "sound_off.png" },
            { path: "images/ui/sound_on.png", name: "sound_on.png" },
            { path: "images/ui/start.png", name: "start.png" },
            { path: "images/ui/title.png", name: "title.png" },
            {
              path: "images/ui/windowed_toggle.png",
              name: "windowed_toggle.png",
            },
          ],
        },
      ],
    },
    {
      path: "sfx",
      name: "sfx",
      children: [
        { path: "sfx/22_bolt.mp3", name: "22_bolt.mp3" },
        { path: "sfx/22_dryfire.mp3", name: "22_dryfire.mp3" },
        {
          path: "sfx/30_shell_bouncing.mp3",
          name: "30_shell_bouncing.mp3",
        },
        { path: "sfx/bounce.mp3", name: "bounce.mp3" },
        { path: "sfx/fire_ambience.mp3", name: "fire_ambience.mp3" },
        {
          path: "sfx/outdoor_ambience_birds.mp3",
          name: "outdoor_ambience_birds.mp3",
        },
        {
          path: "sfx/outdoor_ambience_planes_and_birds.mp3",
          name: "outdoor_ambience_planes_and_birds.mp3",
        },
        { path: "sfx/reload_smg.mp3", name: "reload_smg.mp3" },
        { path: "sfx/shotgun_action.mp3", name: "shotgun_action.mp3" },
        {
          path: "sfx/single_bird_chirp.mp3",
          name: "single_bird_chirp.mp3",
        },
        {
          path: "sfx/single_bird_chirp_2.mp3",
          name: "single_bird_chirp_2.mp3",
        },
        { path: "sfx/squeaky_chair.mp3", name: "squeaky_chair.mp3" },
        { path: "sfx/thud.mp3", name: "thud.mp3" },
        { path: "sfx/walk_dirt.mp3", name: "walk_dirt.mp3" },
        { path: "sfx/walk_snow.mp3", name: "walk_snow.mp3" },
        { path: "sfx/walk_stone.mp3", name: "walk_stone.mp3" },
        { path: "sfx/walk_wet.mp3", name: "walk_wet.mp3" },
        { path: "sfx/water_flowing.mp3", name: "water_flowing.mp3" },
        { path: "sfx/wood_land.mp3", name: "wood_land.mp3" },
      ],
    },
  ],
};
