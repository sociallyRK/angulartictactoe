var gamesApp = angular.module("gamesApp", ["firebase"])

gamesApp.controller("gamesCtrl", ["$scope", "$firebase",
  function($scope, $firebase) {

    var ref = new Firebase("https://blistering-fire-7321.firebaseio.com/board")
    $scope.board = $firebase(ref);
    ref.on("value", function(snapshot) {
      $scope.board.player = snapshot.val().player
    })

    $scope.resetGame = function() {
      $scope.board.$set({
        pos1: "1",
        pos2: "2",
        pos3: "3",
        pos4: "4",
        pos5: "5",
        pos6: "6",
        pos7: "7",
        pos8: "8",
        pos9: "9",
        isGame: true,
        winner: false,
        player: 1
      })
    }

    count = 0
    $scope.addMove = function(pos) {
      count += 1
      if ($scope.board.winner === false) {
        if ($scope.board.player === 1) {
          switch (pos) {
            case 'pos1':
              $scope.board.$update({
                pos1: "X"
              })
              break;
            case 'pos2':
              $scope.board.$update({
                pos2: "X"
              })
              break;
            case 'pos3':
              $scope.board.$update({
                pos3: "X"
              })
              break;
            case 'pos4':
              $scope.board.$update({
                pos4: "X"
              })
              break;
            case 'pos5':
              $scope.board.$update({
                pos5: "X"
              })
              break;
            case 'pos6':
              $scope.board.$update({
                pos6: "X"
              })
              break;
            case 'pos7':
              $scope.board.$update({
                pos7: "X"
              })
              break;
            case 'pos8':
              $scope.board.$update({
                pos8: "X"
              })
              break;
            case 'pos9':
              $scope.board.$update({
                pos9: "X"
              })
              break;
          }
          // No need to check until more than 4 moves have occurred
          if (count > 4) {
            checkWinner()
          }
          if ($scope.board.winner === false) {
            $scope.board.$update({player: 2})
          }
        } else {
          switch (pos) {
            case 'pos1':
              $scope.board.$update({
                pos1: "O"
              })
              break;
            case 'pos2':
              $scope.board.$update({
                pos2: "O"
              })
              break;
            case 'pos3':
              $scope.board.$update({
                pos3: "O"
              })
              break;
            case 'pos4':
              $scope.board.$update({
                pos4: "O"
              })
              break;
            case 'pos5':
              $scope.board.$update({
                pos5: "O"
              })
              break;
            case 'pos6':
              $scope.board.$update({
                pos6: "O"
              })
              break;
            case 'pos7':
              $scope.board.$update({
                pos7: "O"
              })
              break;
            case 'pos8':
              $scope.board.$update({
                pos8: "O"
              })
              break;
            case 'pos9':
              $scope.board.$update({
                pos9: "O"
              })
              break;
          }
          if (count > 4) {
            checkWinner()
          }
          if ($scope.board.winner === false) {
            $scope.board.$update({player: 1})
          }
        }
      }
    }

    checkWinner = function() {
      if ($scope.board["pos1"] === $scope.board["pos2"] && $scope.board["pos2"] === $scope.board["pos3"]) {
        setWinner()
      } else if ($scope.board["pos4"] === $scope.board["pos5"] && $scope.board["pos5"] === $scope.board["pos6"]) {
        setWinner()
      } else if ($scope.board["pos7"] === $scope.board["pos8"] && $scope.board["pos8"] === $scope.board["pos9"]) {
        setWinner()
      } else if ($scope.board["pos1"] === $scope.board["pos4"] && $scope.board["pos4"] === $scope.board["pos7"]) {
        setWinner()
      } else if ($scope.board["pos2"] === $scope.board["pos5"] && $scope.board["pos5"] === $scope.board["pos8"]) {
        setWinner()
      } else if ($scope.board["pos3"] === $scope.board["pos6"] && $scope.board["pos6"] === $scope.board["pos9"]) {
        setWinner()
      } else if ($scope.board["pos1"] === $scope.board["pos5"] && $scope.board["pos5"] === $scope.board["pos9"]) {
        setWinner()
      } else if ($scope.board["pos3"] === $scope.board["pos5"] && $scope.board["pos5"] === $scope.board["pos7"]) {
        setWinner()
      }
    }

    setWinner = function() {
      $scope.board.$update({winner: true})
      $scope.board.$update({isGame: false})
    }

  }
])