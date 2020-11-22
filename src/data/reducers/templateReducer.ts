import Template from '../stores/template'
import { SET_TEMPLATE_ACTION, TemplateAction } from '../actions/templateAction'

export default function template(state: Template = new Template(), action: TemplateAction) {
    switch(action.type) {
        case SET_TEMPLATE_ACTION :
            return setTemplateReducer(state, action);
        default :
            return state;
    }
}

function setTemplateReducer(state: Template, action: TemplateAction) {
    let result: Template = new Template().clone(state);

    if(action.payload.type === "DIALOG") {
        result.dialog = action.payload.flag;
        return result;

    } else if(action.payload.type === "CENTER") {
        result.center = action.payload.flag;
        return result;

    } else if(action.payload.type === "TOP") {
        result.top = action.payload.flag;
        return result;

    } else if(action.payload.type === "BOTTOM") {
        result.bottom = action.payload.flag;
        return result;

    } else if(action.payload.type === "LEFT") {
        result.left = action.payload.flag;
        return result;

    } else if(action.payload.type === "RIGHT") {
        result.right = action.payload.flag;
        return result;
    }
}