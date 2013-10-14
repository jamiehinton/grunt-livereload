Guidebook.service('NoteModel', function(){
    this.addNote = function(chapterId, noteContent){
        var now = new Date();
        var note = {
            content: noteContent,
            id: now
        };

        var chapter = JSON.parse(window.localStorage.getItem(chapterId));
        if(!chapter){
            chapter = {
                id: chapterId,
                notes: []
            }
        }
        chapter.notes.push(note);
        window.localStorage.setItem(chapterId, JSON.stringify(chapter));
    };
});
