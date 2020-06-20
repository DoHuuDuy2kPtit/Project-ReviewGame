class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.ID = Date.now();
  }
}

class Game {
  constructor(name, title, type, image, introduce) {
    this.name = name;
    this.title = title;
    this.type = type;
    this.image = image;
    this.introduce = introduce;
    this.date = new Date();
    this.feedback = [];
  }
}

class Comment {
  constructor(author, comment, rate) {
    this.author = author;
    this.comment = comment;
    this.rate = rate;
    this.date = new Date();
  }
}

const type = ["Game Online", "PC/Console", "Game Mobile"];

const gordianQuest = new Game(
  "Gordian Quest",
  "Đánh giá Gordian Quest: Cứu thế giới bằng một lần chơi chẵn/lẻ",
  type[1],
  "./images/gordian-quest.jpg",
  "Với lối chơi nhập vai truyền thống kết hợp với thẻ bài, Gordian Quest được đánh giá sẽ đem lại trải nghiệm mới khác biệt với các game RPG trước đây."
);

const lol = new Game(
  "League Of Legends",
  "Đánh giá LMHT: Tốc Chiến Alpha Test – Tiêu chuẩn mới cho MOBA trên di động",
  type[2],
  "./images/lol.jpg",
  "Dù mới là giai đoạn thử nghiệm giới hạn, có thể khẳng định Tốc Chiến sẽ mở ra những tiềm năng vô hạn cho thị trường MOBA trên di động."
);

const valorant = new Game(
  "Valorant",
  "Đánh giá Valorant – Cái game này chưa cho Overwatch xuống mộ được đâu!",
  type[0],
  "./images/valorant.jpg",
  "Bất chấp việc có rất nhiều player đang tháo chạy qua Valorant, thì tôi vẫn đánh giá tựa game này chưa thể vươn mình lên thành siêu phẩm được đâu."
);

const crossFireZero = new Game(
  "Crossfire Zero",
  "Đánh giá Crossfire Zero – Một diện mạo mới của Đột Kích",
  type[0],
  "./images/crossfire-zero.jpg",
  "Crossfire Zero sẽ khiến những người theo Đột Kích từ những ngày đầu như Mọt cảm thấy thật thân quen như thời mới bước vào Beta của Đột Kích 12 năm trước."
);

const bezt = new Comment("chung", "da bezt", 0);
crossFireZero.feedback.push(bezt);

const games = [gordianQuest, lol, valorant, crossFireZero];

const user = [];
