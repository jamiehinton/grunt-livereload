Guidebook.controller('AddNoteController', function($scope, $location, $routeParams, NoteModel){
    var chapterId = $routeParams.chapterId;

    $scope.createNote = function(){
        NoteModel.addNote(chapterId, $scope.note.content);
        $location.path('/chapter/'+chapterId);
    };

});
