<?php
  echo "SSSSSSuuup Neil";
  echo "<br>";

  // Tipes Of Morty
  // $morty1 = hipster
  // $morty2 = geriatric
  // $morty3 = hobo
  // $morty4 = businessman
  // $morty5 = specs
  // $morty6 = hippie
  // $morty7 = mascot
  // $morty8 = guard
  // $morty9 = sausage
  // $morty10 = tired


  // Question 1
  switch ( $_POST['question1'] )
  {
      case 'jealous' :
          $morty7 =+ 1;
          break;
      case 'insecure' :
          $morty5 =+ 1;
          $morty10 =+ 10;
          break;
      case 'awkward' :
          $morty1 =+ 1;
          break;
      case 'nihilistic' :
          $morty1 =+ 1;
          break;
      case 'gross' :
          $morty1 =+ 1;
          break;
      case 'evil' :
          $morty1 =+ 1;
          break;
      default:
          $morty1 =+ 1;
          break;
  }

  // Question 2
  switch ( $_POST['question2'] )
  {
      case 'pizza' :
          $morty1 =+ 1;
          break;
      case 'breakfast-cereal' :
          $morty1 =+ 1;
          break;
      case 'eggs' :
          $morty1 =+ 1;
          break;
      case 'szechuan' :
          $morty1 =+ 1;
          break;
      case 'sausage' :
          $morty1 =+ 1;
          break;
      default:
          $morty1 =+ 1;
          break;
  }

  // Question 3
  switch ( $_POST['question3'] )
  {
      case 'einstein' :
          $morty1 =+ 1;
          break;
      case 'normalbrain' :
          $morty1 =+ 1;
          break;
      case 'slightlyoffmentally' :
          $morty1 =+ 1;
          break;
      case 'moron' :
          $morty1 =+ 1;
          break;
      default:
          $morty1 =+ 1;
          break;
  }

  // Question 4
  switch ( $_POST['question4'] )
  {
      case 'well' :
          $morty1 =+ 1;
          break;
      case 'cringe' :
          $morty1 =+ 1;
          break;
      case 'curl' :
          $morty1 =+ 1;
          break;
      default:
          $morty1 =+ 1;
          break;
  }

  // Question 5
  switch ( $_POST['question5'] )
  {
      case 'god' :
          $morty1 =+ 1;
          break;
      case 'love' :
          $morty1 =+ 1;
          break;
      case 'humanity' :
          $morty1 =+ 1;
          break;
      case 'nothing' :
          $morty1 =+ 1;
          break;
      default:
          $morty1 =+ 1;
          break;
  }

  // Question 5
  switch ( $_POST['question6'] )
  {
      case 'gee' :
          $morty1 =+ 1;
          break;
      case 'awesome' :
          $morty1 =+ 1;
          break;
      case 'snorf' :
          $morty1 =+ 1;
          break;
      case 'bad' :
          $morty1 =+ 1;
          break;
      default:
          $morty1 =+ 1;
          break;
  }

  // Question 7
  switch ( $_POST['question7'] )
  {
      case 'yes' :
          $morty1 =+ 1;
          break;
      case 'no' :
          $morty1 =+ 1;
          break;
      case 'tried' :
          $morty1 =+ 1;
          break;
      default:
          $morty1 =+ 1;
          break;
  }

  if ( $morty1 == 2){

  } elseif (condition) {
    # code...
  }

  echo $morty1;
  echo "<br>";
?>
