/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
  '<category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">' +
  '<block type="PlaceAtBrick">\n' +
'    <value name="X_POSITION">\n' +
'      <shadow type="text">\n' +
'        <field name="TEXT">100</field>\n' +
'      </shadow>\n' +
'    </value>\n' +
'    <value name="Y_POSITION">\n' +
'      <shadow type="text">\n' +
'        <field name="TEXT">200</field>\n' +
'      </shadow>\n' +
'    </value>\n' +
'  </block>' +
  '<block type="SetXBrick">\n' +
  '    <value name="X_POSITION">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">100</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>'  +
  '<block type="SetYBrick">\n' +
  '    <value name="Y_POSITION">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">200</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="ChangeXByNBrick">\n' +
  '<value name="X_POSITION_CHANGE">\n' +
  '<shadow type="text">\n' +
  '<field name="TEXT">10</field>\n' +
  '</shadow>\n' +
  '</value>\n' +
  '</block>' +
  '<block type="ChangeYByNBrick">\n' +
  '    <value name="Y_POSITION_CHANGE">\n' +
  '      <shadow type="text">\n' +
  '        <field name="Text">10</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="GoToBrick">\n' +
  '    <value name="TO">\n' +
  '      <shadow type="motion_goto_menu">\n' +
  '        <field name="TO">touch position</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="IfOnEdgeBounceBrick"></block>' +
  '<block type="MoveNStepsBrick">\n' +
  '    <value name="STEPS">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">10</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="TurnLeftBrick">\n' +
  '    <value name="TURN_LEFT_DEGREES">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">15</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="TurnRightBrick">\n' +
  '    <value name="TURN_RIGHT_DEGREES">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">15</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="PointInDirectionBrick">\n' +
  '    <value name="DEGREES">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">90</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="PointToBrick">\n' +
  '    <value name="TOWARDS">\n' +
  '      <shadow type="motion_pointtowards_menu">\n' +
  '        <field name="TOWARDS">new...</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="SetRotationStyleBrick">\n' +
  '    <field name="STYLE">left-right only</field>\n' +
  '  </block>' +
  '<block type="GlideToBrick">\n' +
  '    <value name="DURATION_IN_SECONDS">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="X_DESTINATION">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">100</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="Y_DESTINATION">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">200</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="GoNStepsBackBrick">\n' +
  '    <value name="STEPS">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="ComeToFrontBrick"></block>' +
  '<block type="VibrationBrick" x="241" y="277">\n' +
  '    <value name="VIBRATE_DURATION_IN_SECONDS">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="SetPhysicsObjectTypeBrick">\n' +
  '    <value name="TOWARDS">\n' +
  '      <shadow type="motion_setyourmotiontypeto_menu">\n' +
  '        <field name="TOWARDS">moving and bouncing under gravity</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="SetVelocityBrick">\n' +
  '    <value name="PHYSICS_VELOCITY_X">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">0</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="PHYSICS_VELOCITY_Y">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">0</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="TurnLeftSpeedBrick">\n' +
  '    <value name="PHYSICS_TURN_LEFT_SPEED">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">15</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="TurnRightSpeedBrick">\n' +
  '    <value name="PHYSICS_TURN_RIGHT_SPEED">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">15</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="SetGravityBrick">\n' +
  '    <value name="PHYSICS_GRAVITY_X">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">0</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="PHYSICS_GRAVITY_Y">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">-10</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="SetMassBrick">\n' +
  '    <value name="PHYSICS_MASS">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="SetBounceBrick">\n' +
  '    <value name="PHYSICS_BOUNCE_FACTOR">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">80</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="SetFrictionBrick">\n' +
  '    <value name="PHYSICS_FRICTION">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">80</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_LOOKS}" id="looks" colour="#59C059" secondaryColour="#59C059">' +
  '<block type="looks_switchtolook">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="looks_costume">\n' +
  '        <field name="COSTUME">new...</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_switchtolookwithnumber">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_nextlook"></block>' +
  '<block type="looks_previouslook"></block>' +
  '<block type="looks_setsizeto">\n' +
  '    <value name="SIZE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">60</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_changesizeby">\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">10</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_hide"></block>' +
  '<block type="looks_show"></block>' +
  '<block type="looks_askandstorewrittenanswerin">\n' +
  '    <field name="EFFECT">ShipX</field>\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">What\'s your name?</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_say">\n' +
  '    <value name="MESSAGE">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">Hello!</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_sayforsecond">\n' +
  '    <value name="MESSAGE">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">Hello!</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="SECS">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_think">\n' +
  '    <value name="MESSAGE">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">Hmmmm!</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_thinkforsecond">\n' +
  '    <value name="MESSAGE">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">Hmmmm!</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="SECS">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_settransparencyto">\n' +
  '    <value name="SIZE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">50</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_changetransparencyby">\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">25</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_setbrightnessto">\n' +
  '    <value name="SIZE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">50</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_changebrightnessby">\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">25</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_setcolourto">\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">0</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_changecolourby">\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">25</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_cleargraphiceffects"></block>' +
  '<block type="looks_setbackground">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="looks_background">\n' +
  '        <field name="COSTUME">new...</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_setbackgroundtonumber">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_setbackgroundandwait">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="looks_costume">\n' +
  '        <field name="COSTUME">Space_Background_bigger</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_setbackgroundtonumberandwait">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_turncamera">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="looks_camera">\n' +
  '        <field name="COSTUME">on</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_usecamera">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="looks_camera2">\n' +
  '        <field name="COSTUME">front</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '<block type="looks_turnflashlight">\n' +
  '    <value name="COSTUME">\n' +
  '      <shadow type="looks_camera">\n' +
  '        <field name="COSTUME">on</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SOUND}" id="sound" colour="#9966FF" secondaryColour="#9966FF">' +
    '<block type="sound_startsound">\n' +
  '    <value name="SOUND_MENU">\n' +
  '      <shadow type="sound_startsound_menu">\n' +
  '        <field name="SOUND_MENU">new...</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="sound_startsoundandwait">\n' +
  '    <value name="SOUND_MENU">\n' +
  '      <shadow type="sound_startsoundandwait_menu">\n' +
  '        <field name="SOUND_MENU">new...</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="sound_stopallsounds"></block>' +
    '<block type="sound_setvolumeto">\n' +
  '    <value name="VOLUME">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">60</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="sound_changevolumeby">\n' +
  '    <value name="VOLUME">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">-10</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="sound_speak">\n' +
  '    <value name="TEXT">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">Hello!</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="sound_speakandwait">\n' +
  '    <value name="TEXT">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">Hello!</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="sound_askandstorespokenanswerin">\n' +
  '    <value name="TEXT">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">What\'s your name?</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="SOUND_MENU">\n' +
  '      <shadow type="sound_askandstorespokenanswerin_menu">\n' +
  '        <field name="SOUND_MENU">name</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FF661A" secondaryColour="#CC9900">' +
    '<block type="WhenStartedBrick"></block>' +
    '<block type="WhenBrick"></block>' +
    '<block type="WhenTouchDownBrick"></block>' +
    '<block type="BroadcastReceiverBrick">' +
  '    <field name="BROADCAST_OPTION" variabletype="broadcast_msg">new message</field>' +
  '  </block>' +
    '<block type="BroadcastBrick">\n' +
    '  <value name="BROADCAST_MENU">\n' +
    '    <shadow type="BroadcastBrick_menu">\n' +
    '      <field name="BROADCAST_MENU">new...</field>\n' +
    '    </shadow>\n' +
    '  </value>\n' +
    '</block>' +
    '<block type="BroadcastWaitBrick">\n' +
  '    <value name="BROADCAST_INPUT">\n' +
  '      <shadow type="event_broadcast_menu">\n' +
  '        <field name="BROADCAST_OPTION" variabletype="broadcast_msg">new message</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="WhenConditionBrick">\n' +
  '    <value name="IF_CONDITION">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">1 &lt; 2</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="event_whenyoubounceoff">\n' +
  '    <field name="BROADCAST_OPTION" variabletype="broadcast_msg">any edge, actor, or object</field>\n' +
  '  </block>' +
    '<block type="event_whenbackgroundchangesto" id="/|-$mkxN`/P8hPfOH(AU">\n' +
  '    <field name="BROADCAST_OPTION" id="bd0`~YlSD]d06p}UJ!yX" variabletype="broadcast_msg">Background</field>\n' +
  '  </block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_CONTROL}" id="control" colour="#FFAB19" secondaryColour="#CF8B17">' +
    '<block type="WaitBrick" id="" x="255" y="414">\n' +
  '    <value name="TIME_TO_WAIT_IN_SECONDS">\n' +
  '      <shadow type="text" id="">\n' +
  '        <field name="TEXT">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="NoteBrick">\n' +
  '    <value name="NOTE">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">add comment here...</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="ForeverBrick"></block>' +
    '<block type="IfElseLogicBeginBrick">\n' +
  '        <value name="TEXT">\n' +
  '          <shadow type="text">\n' +
  '            <field name="TEXT">1&lt;2</field>\n' +
  '          </shadow>\n' +
  '        </value>\n' +
  '  </block>' +
    '<block type="IfLogicBeginBrick">\n' +
  '    <value name="TEXT">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">1&lt;2</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="WaitUntilBrick">\n' +
  '    <value name="IF_CONDITION">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">1&lt;2</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="RepeatBrick">\n' +
  '    <value name="TIMES_TO_REPEAT">\n' +
  '      <shadow type="text" id="">\n' +
  '        <field name="TEXT">10</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="RepeatUntilBrick">\n' +
  '    <value name="REPEAT_UNTIL_CONDITION">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">1&lt;2</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="SceneTransitionBrick">\n' +
  '    <value name="sceneForTransition">\n' +
  '      <shadow type="control_continuescene_menu">\n' +
  '        <field name="SCENE_OPTION">new...</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="SceneStartBrick">\n' +
  '    <value name="sceneToStart">\n' +
  '      <shadow type="control_startscene_menu">\n' +
  '        <field name="SCENE_OPTION">Scene 1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="StopScriptBrick">\n' +
  '    <value name="spinnerSelection">\n' +
  '      <shadow type="control_stopscript_menu">\n' +
  '        <field name="SCENE_OPTION">this script</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="CloneBrick">\n' +
  '    <value name="objectToClone">\n' +
  '      <shadow type="control_createcloneof_menu">\n' +
  '        <field name="SCENE_OPTION">yourself</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="DeleteThisCloneBrick"></block>' +
  '</category>' +
  '<category name="Pen" id="sensing" colour="#0fBD8C" secondaryColour="#2E8EB8">' +
    '<block type="pen_pendown"></block>' +
    '<block type="pen_penup"></block>' +
    '<block type="pen_setpensizeto">\n' +
  '    <value name="SIZE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">3.15</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="pen_setpencolorto">\n' +
  '    <value name="red">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">0</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="green">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">0</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="blue">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">255</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="pen_stamp"></block>' +
    '<block type="pen_clear"></block>' +
  '</category>' +
  '<category name="Data" id="operators" colour="#FF6680" secondaryColour="#389438">' +
    '<block type="data_setvariabletocat">\n' +
  '    <field name="EFFECT">name</field>\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="data_changevariablebycat">\n' +
  '    <field name="EFFECT">name</field>\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="data_showvariableat">\n' +
  '    <field name="EFFECT">name</field>\n' +
  '    <value name="X">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">100</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="Y">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">200</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="data_showvariableatsizecoloraligned">\n' +
  '    <value name="X">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">100</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="Y">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">200</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="size">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">120</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="color">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">#FF0000</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="CHANGE">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <field name="NAME">name</field>\n' +
  '    <field name="ALIGNMENT">centered</field>\n' +
  '  </block>' +
    '<block type="data_hidevariable">\n' +
  '    <field name="VARIABLE" variabletype="">name</field>\n' +
  '  </block>' +
    '<block type="data_addtolist">\n' +
  '    <field name="LIST" variabletype="list">list</field>\n' +
  '    <value name="ITEM">\n' +
  '      <shadow type="text">\n' +
  '        <field name="TEXT">name</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="data_deletefromlist">\n' +
  '    <field name="LIST" variabletype="list">list</field>\n' +
  '    <value name="INDEX">\n' +
  '      <shadow type="math_number">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="data_insertintolist">\n' +
  '    <value name="VALUE">\n' +
  '      <shadow type="math_integer">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <field name="LIST" variabletype="list">list</field>\n' +
  '    <value name="INDEX">\n' +
  '      <shadow type="math_integer">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
    '<block type="data_replaceiteminlist">\n' +
  '    <field name="LIST" variabletype="list">list</field>\n' +
  '    <value name="INDEX1">\n' +
  '      <shadow type="math_integer">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '    <value name="INDEX2">\n' +
  '      <shadow type="math_integer">\n' +
  '        <field name="NUM">1</field>\n' +
  '      </shadow>\n' +
  '    </value>\n' +
  '  </block>' +
  '</category>' +
  '</xml>';
