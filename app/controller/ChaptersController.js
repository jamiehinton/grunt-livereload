Guidebook.controller('ChaptersController', function($scope, $location, $routeParams, ChapterModel){
    var chapters = ChapterModel.getChapters();
    for(var i=0; i < chapters.length; i++){

    }

    $scope.chapters = chapters;
    $scope.selectedChapterId = $routeParams.chapterId;
});