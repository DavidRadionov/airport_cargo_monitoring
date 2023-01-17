import { Alert } from "react-bootstrap";
import ModuleCitiesControl from "./ModuleCitiesControl";
import ModuleControlSchemes from "./ModuleControlSchemes";

function ModuleInfoControl() {
    return (
        <div>
            <Alert style={{display: "flex", flexDirection: "row"}}>
                <ModuleCitiesControl/>
                <ModuleControlSchemes/>
            </Alert>
        </div>
    );
};

export default ModuleInfoControl;