System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TodoState;
    return {
        setters: [],
        execute: function () {
            (function (TodoState) {
                TodoState[TodoState["Active"] = 1] = "Active";
                TodoState[TodoState["Complete"] = 2] = "Complete";
            })(TodoState || (TodoState = {}));
            exports_1("TodoState", TodoState);
        }
    };
});
//# sourceMappingURL=Model.js.map