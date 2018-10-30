const app = angular.module('ClosetApp', []);

app.controller('MyController', ['$http', function($http){

  this.includePath = 'partials/main.html';
  this.navPath = 'partials/nav.html'

  this.changeInclude = (path) => {
    this.includePath = 'partials/'+ path +'.html';
    console.log(this.changeInclude);
  };

  this.changeNavPath = (path) => {
    this.navPath = 'partials/'+ path
+ '.html';
console.log(this.changeNav);
};

    const controller = this;

    this.newOutfit = function(){
      // console.log(this.type);
      $http({
        method: 'POST',
        url: '/outfits/new',
        data: {
          category: this.category,
          type: this.type,
          image: this.image,
          season: this.season,
          occasion: this.occasion
        }
      }).then(function(response){
        controller.getOutfit()
        this.newOutfit.image = null;
      }, function(){
        console.log('error');
      })
    }

    this.getOutfit = function(){
      $http({
        method: 'GET',
        url: '/outfits'
      }).then(function(response){
        controller.outfits = response.data
      }, function(){
        console.log('error');
      })
    }

    this.deleteOutfit = function(outfit){
        $http({
          method: 'DELETE',
          url: '/outfits/' + outfit._id
        }).then(function(response){
          controller.getOutfit();
        }, function() {
          console.log('error');
        })
        }

    this.editOutfit = function(outfit){
      console.log(this.editedImage);
      $http({
        method: 'PUT',
        url: '/outfits/' + outfit._id,
        data: {
          category: this.editedCategory,
          type: this.editedType,
          image: this.image,
          season: this.editedSeason,
          occasion: this.editedOccasion

          // tag: this.editedtag
        }
      }).then(function(response){
          this.editOutfit.image = null;
        controller.getOutfit();
        console.log(response)
      },function(){
        console.log('error');
      })
    }

    this.getOutfit();

    this.createUser = function(){
    $http({
        method:'POST',
        url: '/users',
        data: {
            username: this.username,
            password: this.password
        }
    }).then(function(response){
        console.log(response);
    }, function(){
        console.log('error');
    });
}

this.logIn = function(){
    $http({
        method:'POST',
        url: '/sessions',
        data: {
            username: this.username,
            password: this.password
        }
    }).then(function(response){
      controller.loggedInUser = response.data.username;
      this.changeInclude("create");
        console.log(response);
    }, function(){
        console.log('error');
    });
}

// this.logOut = function(){
//   $http({
//     method: "DELETE"
//     url: "/sessions/destroy"
//   }).then(
//     function(response){
//       this.changeInclude("index")
//     },
//     function(error){
//       console.log(error);
//     });
// }

this.goApp = function(){
    const controller = this; //add this
    $http({
        method:'GET',
        url: '/app'
    }).then(function(response){
        controller.loggedInUsername = response.data.username; //change this
    }, function(){
        console.log('error');
    })
  }

this.showModal = true;

this.displayHide = () => {
  this.showModal = !this.showModal;
}

//notes for dropdowns + ng-if
this.toggleOuterwear = () => {

}])
