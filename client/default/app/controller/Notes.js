Ext.define("NotesApp.controller.Notes", {
    extend: "Ext.app.Controller",
    config: {
        refs: {
            newNoteBtn: "#new-note-btn"
        },
        control: {
            newNoteBtn: {
                tap: "onNewNote"
            }
        }
    },
    onNewNote: function () {
        console.log("onNewNote");
    },
    launch: function () {
        this.callParent();
        console.log("launch");
    },
    init: function () {
        this.callParent();
        console.log("init");
    }
});