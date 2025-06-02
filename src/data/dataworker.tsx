type Employee = {
  name: string;
  age: number;
  gender: 'male' | 'female';
  career: string;
};

const employees: Employee[] = [
  // ช่างเชื่อม (6 คน)
  { name: "สมชาย ใจกล้า", age: 34, gender: "male", career: "ช่างเชื่อม" },
  { name: "อำนาจ ทองแท้", age: 37, gender: "male", career: "ช่างเชื่อม" },
  { name: "มนตรี พิทักษ์ผล", age: 42, gender: "male", career: "ช่างเชื่อม" },
  { name: "พงศ์เทพ รุ่งเรือง", age: 33, gender: "male", career: "ช่างเชื่อม" },
  { name: "วีรศักดิ์ กล้าหาญ", age: 39, gender: "male", career: "ช่างเชื่อม" },
  { name: "ชัยวัฒน์ ศรีบุญ", age: 31, gender: "male", career: "ช่างเชื่อม" },

  // ทำเค้ก (5 คน)
  { name: "สายฝน แก้วใส", age: 25, gender: "female", career: "คนทำเค้ก" },
  { name: "พรรณี วงศ์ดี", age: 26, gender: "female", career: "คนทำเค้ก" },
  { name: "กมลวรรณ บุญมา", age: 35, gender: "female", career: "คนทำเค้ก" },
  { name: "ศิริพร รัตนชาติ", age: 26, gender: "female", career: "คนทำเค้ก" },
  { name: "จารุวรรณ ทองงาม", age: 32, gender: "female", career: "คนทำเค้ก" },

  // แม่บ้าน (6 คน)
  { name: "วันดี แซ่ลี้", age: 28, gender: "female", career: "แม่บ้าน" },
  { name: "กัลยา อินทรสุข", age: 31, gender: "female", career: "แม่บ้าน" },
  { name: "สุนีย์ ดำรงค์ชัย", age: 29, gender: "female", career: "แม่บ้าน" },
  { name: "นริศรา ศักดิ์ดี", age: 34, gender: "female", career: "แม่บ้าน" },
  { name: "ปาริฉัตร พิพัฒน์ผล", age: 22, gender: "female", career: "แม่บ้าน" },
  { name: "กาญจนา ใจภักดี", age: 37, gender: "female", career: "แม่บ้าน" },

  // ช่างเทคนิค (7 คน)
  { name: "ธีรเดช บวรธรรม", age: 30, gender: "male", career: "ช่างเทคนิค" },
  { name: "อภิวัฒน์ ตั้งจิต", age: 38, gender: "male", career: "ช่างเทคนิค" },
  { name: "สมพงษ์ รัตน์ประเสริฐ", age: 36, gender: "male", career: "ช่างเทคนิค" },
  { name: "ทศพร โชคชัย", age: 40, gender: "male", career: "ช่างเทคนิค" },
  { name: "อัครพล ประทานพร", age: 29, gender: "male", career: "ช่างเทคนิค" },
  { name: "สุรชัย พิสุทธิ์ธรรม", age: 44, gender: "male", career: "ช่างเทคนิค" },
  { name: "สถาพร ทองสว่าง", age: 43, gender: "male", career: "ช่างเทคนิค" }
];

export default employees;
