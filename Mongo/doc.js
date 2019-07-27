
// Insert in MongoDB
db.registerService.insert({
  allowedServiceIds : [{"_id" : "rpms3XZMBxAevwyPd"}],  // id của Service bắt buộc phải có khi đăng ký Service mới
  registerId : "xzRMuG8LMw64zuxoi",   // id của Service mới
  info : {
      vi : "Dịch vụ Dọn dẹp buồng, phòng đã sẵn sàng, mời bạn đăng ký! Hoặc có thể đến công ty của chúng tôi để làm thủ tục đăng ký dịch vụ.",
      en : "Dịch vụ Dọn dẹp buồng, phòng đã sẵn sàng, mời bạn đăng ký! Hoặc có thể đến công ty của chúng tôi để làm thủ tục đăng ký dịch vụ.",
      ko : "Dịch vụ Dọn dẹp buồng, phòng đã sẵn sàng, mời bạn đăng ký! Hoặc có thể đến công ty của chúng tôi để làm thủ tục đăng ký dịch vụ."
}})


// Update in MongoDB
db.getCollection('service').update({'text.en': 'Housekeeping'}, {$set: {requireTaskerVersion: '2.10.0'}})

"depositIntruction" : [ 
  {
      "city" : "Hồ Chí Minh",
      "address" : "Ngân hàng Techcombank chi nhánh Thắng Lợi",
      "accountHolder" : "CÔNG TY TNHH BTASKEE",
      "accountNumber" : "19130355143051",
      "bankName" : {
          "vi" : "Ngân hàng Techcombank",
          "en" : "Techcombank",
          "ko" : "Techcombank"
      },
      "bankDepartment" : {
          "vi" : "Chi nhánh Thắng Lợi",
          "en" : "Thắng Lợi Branch",
          "ko" : "Thắng Lợi 지점"
      }
  }, 
  {
      "city" : "Hà Nội",
      "address" : "Toà nhà Hanoi Creative City, tầng 8 , số 1 Lương Yên,Quận Hai Bà Trưng, Hà Nội",
      "accountHolder" : "CÔNG TY TNHH BTASKEE",
      "accountNumber" : "19130355143335",
      "bankName" : {
          "vi" : "Ngân hàng Techcombank",
          "en" : "Techcombank",
          "ko" : "Techcombank"
      },
      "bankDepartment" : {
          "vi" : "Chi nhánh Hoàng Quốc Việt",
          "en" : "Hoàng Quốc Việt Branch",
          "ko" : "Hoàng Quốc Việt Branch"
      }
  }, 
  {
      "city" : "Đà Nẵng",
      "address" : "Tầng 3 DNES, 31 Trần Phú, Quận Hải Châu, TP Đà Nẵng",
      "accountHolder" : "CÔNG TY TNHH BTASKEE",
      "accountNumber" : "19130355143068",
      "bankName" : {
          "vi" : "Ngân hàng Techcombank",
          "en" : "Techcombank",
          "ko" : "Techcombank"
      },
      "bankDepartment" : {
          "vi" : "Chi nhánh Chợ Hàn",
          "en" : "Đà Nẵng Branch",
          "ko" : "Đà Nẵng Branch"
      }
  }, 
  {
      "city" : "Bình Dương",
      "address" : "Ngân hàng Techcombank chi nhánh Bình Dương",
      "accountHolder" : "CÔNG TY TNHH BTASKEE",
      "accountNumber" : "19130355143076",
      "bankName" : {
          "vi" : "Ngân hàng Techcombank",
          "en" : "Techcombank",
          "ko" : "Techcombank"
      },
      "bankDepartment" : {
          "vi" : "Chi nhánh Bình Dương",
          "en" : "Bình Dương Branch",
          "ko" : "Bình Dương 지점"
      }
  }, 
  {
      "city" : "Hải Phòng",
      "address" : "Ngân hàng Techcombank chi nhánh Thắng Lợi",
      "accountHolder" : "CÔNG TY TNHH BTASKEE",
      "accountNumber" : "19130355143051",
      "bankName" : {
          "vi" : "Ngân hàng Techcombank",
          "en" : "Techcombank",
          "ko" : "Techcombank"
      },
      "bankDepartment" : {
          "vi" : "Chi nhánh Thắng Lợi",
          "en" : "Thắng Lợi Branch",
          "ko" : "Thắng Lợi 지점"
      }
  }, 
  {
      "city" : "Lâm Đồng",
      "address" : "Ngân hàng Techcombank chi nhánh Thắng Lợi",
      "accountHolder" : "CÔNG TY TNHH BTASKEE",
      "accountNumber" : "19130355143051",
      "bankName" : {
          "vi" : "Ngân hàng Techcombank",
          "en" : "Techcombank",
          "ko" : "Techcombank"
      },
      "bankDepartment" : {
          "vi" : "Chi nhánh Thắng Lợi",
          "en" : "Thắng Lợi Branch",
          "ko" : "Thắng Lợi 지점"
      }
  }, 
  {
      "city" : "Khánh Hòa",
      "address" : "Ngân hàng Techcombank chi nhánh Thắng Lợi",
      "accountHolder" : "CÔNG TY TNHH BTASKEE",
      "accountNumber" : "19130355143051",
      "bankName" : {
          "vi" : "Ngân hàng Techcombank",
          "en" : "Techcombank",
          "ko" : "Techcombank"
      },
      "bankDepartment" : {
          "vi" : "Chi nhánh Thắng Lợi",
          "en" : "Thắng Lợi Branch",
          "ko" : "Thắng Lợi 지점"
      }
  }
],

db.getCollection('taskerSettings').insert( 
  {
      _id : "EcwKcv8FhpZNHT39",
      trainingInput : {
          link : "https://raw.githubusercontent.com/bTaskee/TrainingV3/master/chapter_1/quizz_8.json",
          minRateScore : 100,
          version : 2,
          numberTest : 2
      },
      trainingTasker : {
          link : "https://raw.githubusercontent.com/bTaskee/TrainingV3/master/courses.json",
          minRateScore : 80,
          version : 2,
          numberTest : 2
      },
      handbook : {
          vi : "http://68.183.179.141:3030/pdf-file/So_tay_bTasker.pdf",
          ko : "http://68.183.179.141:3030/pdf-file/So_tay_bTasker.pdf",
          en : "http://68.183.179.141:3030/pdf-file/So_tay_bTasker.pdf"
      }
  }
  )