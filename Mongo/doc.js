
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