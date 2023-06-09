let res =
  'INSERT INTO lookup.professional_types ("name", code, "departmentId", "amharicProfessionalType", "createdAt", "updatedAt", educational_level_id, status)VALUES';
 
for (let i = 1; i < 39; i++) {
  for (let j = 1; j <8; j++) {
    res +=
      "('other', 'OTH_" +
      Math.floor(Math.random() * 9999) + 1+
      "'," +
      i +
      ", 'ሌላ', '2022-12-26T21:00:00.000Z', '2022-12-26T21:00:00.000Z'," +
      j +
      ", true),";
  }
}
console.log(res);
