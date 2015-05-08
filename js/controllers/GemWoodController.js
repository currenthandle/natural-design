app.controller('GemWoodController', ['$scope', function($scope) {
    
    $scope.myInterval = 5000;
    $scope.slides = [
        {
            image: 'img/gemWood/01.jpg'
        },
        {
            image: 'img/gemWood/02.jpg'
        },
        {
            image: 'img/gemWood/03.jpg'
        },
        {
            image: 'img/gemWood/04.jpg'
        },
        {
            image: 'img/gemWood/05.jpg'
        },
        {
            image: 'img/gemWood/06.jpg'
        },
        {
            image: 'img/gemWood/07.jpg'
        },
        {
            image: 'img/gemWood/09.jpg'
        },
        {
            image: 'img/gemWood/10.jpg'
        },
        {
            image: 'img/gemWood/11.jpg'
        },
        {
            image: 'img/gemWood/12.jpeg'
        },
        {
            image: 'img/gemWood/13.png'
        },
        {
            image: 'img/gemWood/14.png'
        },
        {
            image: 'img/gemWood/15.png'
        },
        {
            image: 'img/gemWood/16.png'
        },
        {
            image: 'img/gemWood/17.jpeg'
        },
        {
            image: 'img/gemWood/18.jpg'
        },
        {
            image: 'img/gemWood/19.jpg'
        },
        {
            image: 'img/gemWood/20.jpg'
        },
        {
            image: 'img/gemWood/21.jpg'
        },
        {
            image: 'img/gemWood/22.jpg'
        },
        {
            image: 'img/gemWood/23.jpg'
        },
        {
            image: 'img/gemWood/24.jpg'
        },
        {
            image: 'img/gemWood/25.jpg'
        },
        {
            image: 'img/gemWood/26.jpg'
        },
        {
            image: 'img/gemWood/27.jpg'
        },
        {
            image: 'img/gemWood/28.jpg'
        },
        {
            image: 'img/gemWood/29.jpg'
        },
        {
            image: 'img/gemWood/30.jpg'
        },
        {
            image: 'img/gemWood/31.jpg'
        },
        {
            image: 'img/gemWood/32.jpg'
        },
        {
            image: 'img/gemWood/33.jpg'
        },
        {
            image: 'img/gemWood/34.jpg'
        },
        {
            image: 'img/gemWood/35.jpg'
        },
        {
            image: 'img/gemWood/36.jpg'
        },
        {
            image: 'img/gemWood/37.jpg'
        },
        {
            image: 'img/gemWood/38.jpg'
        },
        {
            image: 'img/gemWood/39.jpg'
        },
        {
            image: 'img/gemWood/40.jpg'
        },
        {
            image: 'img/gemWood/41.jpg'
        },
        {
            image: 'img/gemWood/42.jpg'
        },
        {
            image: 'img/gemWood/43.jpg'
        },
        {
            image: 'img/gemWood/44.jpg'
        },
        {
            image: 'img/gemWood/45.jpg'
        },
        {
            image: 'img/gemWood/46.jpg'
        },
        {
            image: 'img/gemWood/47.jpg'
        },
        {
            image: 'img/gemWood/48.jpg'
        },
        {
            image: 'img/gemWood/49.jpg'
        },
        {
            image: 'img/gemWood/50.jpg'
        },
        {
            image: 'img/gemWood/51.jpg'
        },
        {
            image: 'img/gemWood/52.jpg'
        },
        {
            image: 'img/gemWood/53.jpg'
        },
        {
            image: 'img/gemWood/54.jpg'
        },
        {
            image: 'img/gemWood/55.jpg'
        },
        {
            image: 'img/gemWood/56.jpg'
        }

    ];
    $scope.slideActive=[];
    
    $scope.seceltor= function(index){
        $scope.slideActive[index]=true;
    };
    
    for(i=0; i < $scope.slides.length; i++){
        if(i===0){    
            $scope.slideActive[i]=true;
        }
        else{
            $scope.slideActive[i]=false;
        }
    };
    
}]);