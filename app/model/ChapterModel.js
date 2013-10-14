Guidebook.service('ChapterModel', function(){
   this.getChapters = function(){
       return [
           {id:0,
       title:'Chapter 1',
       summary: 'This is a summary'},
           {id:1,
               title:'Chapter 2',
               summary: 'This is a summary'}
       ]
   }
});
