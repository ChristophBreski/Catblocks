/**
 * @description data Catblocks bricks
 */

'use strict';

export default {
  "SetVariableBrick": {
    "message0": "%{BKY_DATA_SETVARIABLETOCAT}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      },
      {
        "type": "field_input",
        "name": "VARIABLE",
        "text": "Some Value"
      }
    ]
  },
  "ChangeVariableBrick": {
    "message0": "%{BKY_DATA_CHANGEVARIABLEBY}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      },
      {
        "type": "field_input",
        "name": "VARIABLE_CHANGE",
        "text": "Some new Value"
      }
    ]
  },
  "ShowTextBrick": {
    "message0": "%{BKY_DATA_SHOWVARIABLEAT}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      },
      {
        "type": "field_number",
        "name": "X_POSITION",
        "value": 10
      },
      {
        "type": "field_number",
        "name": "Y_POSITION",
        "value": 50
      }
    ]
  },
  "ShowTextColorSizeAlignmentBrick": {
    "message0": "%{BKY_DATA_SHOWVARIABLEATSIZECOLORALIGNED}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      },
      {
        "type": "field_number",
        "name": "X_POSITION",
        "value": 20
      },
      {
        "type": "field_number",
        "name": "Y_POSITION",
        "value": 20
      },
      {
        "type": "field_number",
        "name": "SIZE",
        "value": 100
      },
      {
        "type": "field_number",
        "name": "COLOR",
        "value": 240
      },
      {
        "type": "field_input",
        "name": "DROPDOWN2",
        "text": "new"
      }
    ]
  },
  "DeleteItemOfUserListBrick": {
    "message0": "%{BKY_DATA_DELETEITEMFROMLIST}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      },
      {
        "type": "field_number",
        "name": "LIST_DELETE_ITEM",
        "value": 1
      }
    ]
  },
  "AddItemToUserListBrick": {
    "message0": "%{BKY_DATA_ADDTOLIST}",
    "args0": [
      {
        "type": "field_input",
        "name": "LIST_ADD_ITEM",
        "text": "name"
      },
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      }
    ]
  },
  "InsertItemIntoUserListBrick": {
    "message0": "%{BKY_DATA_INSERTINTOLIST}",
    "args0": [
      {
        "type": "field_input",
        "name": "INSERT_ITEM_INTO_USERLIST_VALUE",
        "text": "name"
      },
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      },
      {
        "type": "field_number",
        "name": "INSERT_ITEM_INTO_USERLIST_INDEX",
        "value": 1
      }
    ]
  },
  "ReplaceItemInUserListBrick": {
    "message0": "%{BKY_DATA_REPLACEITEMINLIST}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      },
      {
        "type": "field_number",
        "name": "INSERT_ITEM_INTO_USERLIST_INDEX",
        "value": 0
      },
      {
        "type": "field_input",
        "name": "INSERT_ITEM_INTO_USERLIST_VALUE",
        "text": "new Value"
      }
    ]
  },
  "HideTextBrick": {
    "message0": "%{BKY_DATA_HIDEVARIABLE}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      }
    ]
  },
  "ReadVariableFromDeviceBrick": {
    "message0": "%{BKY_DATA_READVARIABLE}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      }
    ]
  },
  "WriteVariableOnDeviceBrick": {
    "message0": "%{BKY_DATA_WRITEVARIABLE}",
    "args0": [
      {
        "type": "field_input",
        "name": "DROPDOWN",
        "text": "new"
      }
    ]
  }
};