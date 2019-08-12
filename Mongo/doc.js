
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

// "depositIntruction" : [ 
//   {
//       "city" : "Hồ Chí Minh",
//       "address" : "Ngân hàng Techcombank chi nhánh Thắng Lợi",
//       "accountHolder" : "CÔNG TY TNHH BTASKEE",
//       "accountNumber" : "19130355143051",
//       "bankName" : {
//           "vi" : "Ngân hàng Techcombank",
//           "en" : "Techcombank",
//           "ko" : "Techcombank"
//       },
//       "bankDepartment" : {
//           "vi" : "Chi nhánh Thắng Lợi",
//           "en" : "Thắng Lợi Branch",
//           "ko" : "Thắng Lợi 지점"
//       }
//   }, 
//   {
//       "city" : "Hà Nội",
//       "address" : "Toà nhà Hanoi Creative City, tầng 8 , số 1 Lương Yên,Quận Hai Bà Trưng, Hà Nội",
//       "accountHolder" : "CÔNG TY TNHH BTASKEE",
//       "accountNumber" : "19130355143335",
//       "bankName" : {
//           "vi" : "Ngân hàng Techcombank",
//           "en" : "Techcombank",
//           "ko" : "Techcombank"
//       },
//       "bankDepartment" : {
//           "vi" : "Chi nhánh Hoàng Quốc Việt",
//           "en" : "Hoàng Quốc Việt Branch",
//           "ko" : "Hoàng Quốc Việt Branch"
//       }
//   }, 
//   {
//       "city" : "Đà Nẵng",
//       "address" : "Tầng 3 DNES, 31 Trần Phú, Quận Hải Châu, TP Đà Nẵng",
//       "accountHolder" : "CÔNG TY TNHH BTASKEE",
//       "accountNumber" : "19130355143068",
//       "bankName" : {
//           "vi" : "Ngân hàng Techcombank",
//           "en" : "Techcombank",
//           "ko" : "Techcombank"
//       },
//       "bankDepartment" : {
//           "vi" : "Chi nhánh Chợ Hàn",
//           "en" : "Đà Nẵng Branch",
//           "ko" : "Đà Nẵng Branch"
//       }
//   }, 
//   {
//       "city" : "Bình Dương",
//       "address" : "Ngân hàng Techcombank chi nhánh Bình Dương",
//       "accountHolder" : "CÔNG TY TNHH BTASKEE",
//       "accountNumber" : "19130355143076",
//       "bankName" : {
//           "vi" : "Ngân hàng Techcombank",
//           "en" : "Techcombank",
//           "ko" : "Techcombank"
//       },
//       "bankDepartment" : {
//           "vi" : "Chi nhánh Bình Dương",
//           "en" : "Bình Dương Branch",
//           "ko" : "Bình Dương 지점"
//       }
//   }, 
//   {
//       "city" : "Hải Phòng",
//       "address" : "Ngân hàng Techcombank chi nhánh Thắng Lợi",
//       "accountHolder" : "CÔNG TY TNHH BTASKEE",
//       "accountNumber" : "19130355143051",
//       "bankName" : {
//           "vi" : "Ngân hàng Techcombank",
//           "en" : "Techcombank",
//           "ko" : "Techcombank"
//       },
//       "bankDepartment" : {
//           "vi" : "Chi nhánh Thắng Lợi",
//           "en" : "Thắng Lợi Branch",
//           "ko" : "Thắng Lợi 지점"
//       }
//   }, 
//   {
//       "city" : "Lâm Đồng",
//       "address" : "Ngân hàng Techcombank chi nhánh Thắng Lợi",
//       "accountHolder" : "CÔNG TY TNHH BTASKEE",
//       "accountNumber" : "19130355143051",
//       "bankName" : {
//           "vi" : "Ngân hàng Techcombank",
//           "en" : "Techcombank",
//           "ko" : "Techcombank"
//       },
//       "bankDepartment" : {
//           "vi" : "Chi nhánh Thắng Lợi",
//           "en" : "Thắng Lợi Branch",
//           "ko" : "Thắng Lợi 지점"
//       }
//   }, 
//   {
//       "city" : "Khánh Hòa",
//       "address" : "Ngân hàng Techcombank chi nhánh Thắng Lợi",
//       "accountHolder" : "CÔNG TY TNHH BTASKEE",
//       "accountNumber" : "19130355143051",
//       "bankName" : {
//           "vi" : "Ngân hàng Techcombank",
//           "en" : "Techcombank",
//           "ko" : "Techcombank"
//       },
//       "bankDepartment" : {
//           "vi" : "Chi nhánh Thắng Lợi",
//           "en" : "Thắng Lợi Branch",
//           "ko" : "Thắng Lợi 지점"
//       }
//   }
// ],

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

  // $in : [a, b] lấy những record có chứa a, b
  // $nin : [a, b] lấy những record không chứa a, b
  // a: { $exists: true } kiểm tra xem record có tồn tại a không
  // export MONGO_URL=mongodb://localhost:3001/meteor trỏ server đến database meteor

//HostelCleaning
if (data.detailHostel) {
  taskItem.detailHostel = data.detailHostel;
} else if (service.text.en === 'Housekeeping') {
  taskItem.detailHostel = {
    hostelId : "123456",
    hostelName : "Diamond Place",
    rooms : [
        {
            id : "123456",
            name : "Beauty Alexander",
            images : [ 
                "https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/67636981_2489206921365688_4005791966913626112_n.jpg?_nc_cat=102&_nc_oc=AQnUOglekUBojY2rVb0BNmOej3ZaZBe1Qj0VtSiBCzpWFLLt6HYVMrEzfkhFOeRKN8Y&_nc_ht=scontent.fsgn5-4.fna&oh=6f9bd7279e598baeacf6e76e0d3338a1&oe=5DD3246F", 
                "https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/61925368_845603509143220_1869935048786968576_n.jpg?_nc_cat=105&_nc_oc=AQk4Vw65v8IeXlPi1h9nJcGpiJajQy1SxNFf1pjJjFr08Lmp9NZMWeBnemiJV9_G9Xo&_nc_ht=scontent.fsgn5-7.fna&oh=12c30e0621f8527dd3faeb356ef9c84d&oe=5DA488D5", 
                "https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/57194597_817463958623842_6657638129903599616_o.jpg?_nc_cat=103&_nc_oc=AQnBboVFLGoI4_VJK_erEsGhUiWmdIjK0TUQYifm-Rbymxr5um4Ac02xSHwzzxe86sg&_nc_ht=scontent.fsgn5-7.fna&oh=ea2f225580c87dab2720857ce410d872&oe=5DE49D9F", 
                "https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/52838923_788380694865502_6666179685983977472_o.jpg?_nc_cat=105&_nc_oc=AQkjt4X7Xfs60xFqfX8hRFRSnG0pFxJWleSFmhdEXBC22A75MlkARVtODuw8IygGAHk&_nc_ht=scontent.fsgn5-7.fna&oh=02a44ec7e4d7af3f11de664e0e22ff55&oe=5DE8FC11"
            ],
            area : 50,
            note : "Ghi chú Alexander"
        }, 
        {
            id : "123456",
            name : "Room #1",
            images : [ 
                "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/50840591_770612873308951_7651621303115317248_n.jpg?_nc_cat=100&_nc_oc=AQmVuzTd5p5Hc0gW8czanPHMBhZUCRcqvU83v0NUUwetDM_v2s9g7PuNzRqM7mC6rzY&_nc_ht=scontent.fsgn5-5.fna&oh=968bf0e6fe134209008b3db605105854&oe=5DD6CF57", 
                "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/67881077_156425265503860_4746579172984356864_n.jpg?_nc_cat=111&_nc_oc=AQkB1xxwaPTpCUXEcnXa_LYVqGVsL2CaUrOLkLpeespwg0NNUPtFokV4lSR1C6UZayw&_nc_ht=scontent.fsgn5-3.fna&oh=6cdd7fd06e981a7032d0d6fe27ed5f19&oe=5DE60B1F", 
                "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/67768487_644855022690708_3001944688342073344_o.jpg?_nc_cat=110&_nc_oc=AQmuzQLmBeKkuJLsHmZ2msyEc1i6oqnep4q_4FOEBrCcleIIFhChsfqx6WBj0vfVYxs&_nc_ht=scontent.fsgn5-3.fna&oh=2ad2cb3f6038d932bfc784ab109e011d&oe=5DDB4D76", 
                "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/67668063_118045662852002_8681731366104072192_o.jpg?_nc_cat=111&_nc_oc=AQnqPiVH9wCkBZdqP46o25BqeSDoXA_5bnGBGujZ1agNPxLxDpzqfmA3GYexDpexB_A&_nc_ht=scontent.fsgn5-3.fna&oh=9e1aea3ed60381ce44fce640eb77c811&oe=5DA0334E"
            ],
            area : 50,
            note : "Ghi chú"
        }, 
        {
            id : "123456",
            name : "Room #2",
            images : [ 
                "https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/67421073_145069110026702_586206552789090304_n.jpg?_nc_cat=108&_nc_oc=AQkXBELaQYw7yB56ZXMGGGN3B7QicULcKyGvJr3L87DlaIsYhP8hWdDsaLsYG15qMMQ&_nc_ht=scontent.fsgn5-5.fna&oh=8ffa587079a9ccda4dad6615cd11e17a&oe=5DDA33DE", 
                "https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/67400822_145069126693367_6699376025085673472_n.jpg?_nc_cat=104&_nc_oc=AQk4YZXihYfBimXTj9Hs-2p22j36u90U9bxUjs_GycaSJgfU1jgKjxrGYH8DDOiVAqY&_nc_ht=scontent.fsgn5-4.fna&oh=c1cced054e98a452c198b81f95ada596&oe=5DD251E3", 
                "https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/68587269_2080598365380133_9189438930473189376_o.jpg?_nc_cat=104&_nc_oc=AQkHyHBOBRg3xmPvrwMfzZ17gK2x7kebTAwdNRq0FwMrhzLMBvaxLrltSngoWVKAv0c&_nc_ht=scontent.fsgn5-4.fna&oh=da2b6b5898e61ec2175fcf99b9315a3e&oe=5DD3D120", 
                "https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/67530533_522274018514081_2719752477862789120_o.jpg?_nc_cat=109&_nc_oc=AQkND3g6QSGFXemJCX_7_Sd1eqFPNMPz1mnA3jJtfE74PyExRLFYxfynwTlmI5DQyR8&_nc_ht=scontent.fsgn5-6.fna&oh=e343361fd67aa74695b2ba9b74cef494&oe=5DD0D187"
            ],
            area : 50,
            note : "Ghi chú"
        }
    ],
    totalArea : 150
  }
}



// Post to Slack
// “SLACK_POST”: {
//   “API_URL”: “https://slack.com/api/chat.postMessage“,
//   “TOKEN”: “xoxp-637815462612-626894492435-640175725383-48375364060308f3f61843e2d2f135e9",
//   “SLACK_CHANNEL”: “mobile-app”
// },
// https://slacktest-1jq2217.slack.com/messages/CJESZ4LTU/details/