import getUserDataById from "./getUserDataById.js";

async function getUserData() {
    const userData = await getUserDataById(2);
    console.log(userData); // Kullanıcı bilgileri ve post'ları konsolda yazdırılır
  }

getUserData();
