function setup() {
  
}

function preload(){
  black_bishop_img= loadImage("chess pieces/black_bishop.png")
  black_king_img= loadImage("chess pieces/black_king.png")
  black_knight_img= loadImage("chess pieces/black_knight.png")
  black_pawn_img= loadImage("chess pieces/black_pawn.png")
  black_rook_img= loadImage("chess pieces/black_rook.png")
  black_queen_img= loadImage("chess pieces/black_queen.png")
  white_king_img= loadImage("chess pieces/white_king.png")
  white_bishop_img= loadImage("chess pieces/white_bishop.png")
  white_knight_img= loadImage("chess pieces/white_knight.png")
  white_pawn_img= loadImage("chess pieces/white_pawn.png")
  white_queen_img= loadImage("chess pieces/white_queen.png")
  white_rook_img= loadImage("chess pieces/white_rook.png")
  ze_chess_board_img= loadImage("chess pieces/ze_chess_board.png")
}

function draw() {
  background(ze_chess_board_img);  
  drawSprites();
}