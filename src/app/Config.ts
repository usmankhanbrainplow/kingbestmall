import {Injectable} from '@angular/core';

@Injectable()
export class Config {//https://apis.choicegenie.com/choice/
    //public static api: String = 'https://apis.choicegenie.com/choice/';

public static api: String = 'https://apis.choicegenie.com/';
// public static api: String = 'http://192.168.29.223:8000/';
// 
//   public static api: String = 'http://192.168.29.163:9000/';


   public static Imageurl: string = 'https://storage.choicegenie.com/media/';
    public  static  Imageurlget = 'https://storage.choicegenie.com/images/';
   public  static  Imageurlupload = 'https://storage.kingbestmall.com/upload_image.php';
   public static pdfupload='https://storage.choicegenie.com/upload.php';
}

