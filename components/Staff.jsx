import AboutSchool from "./AboutSchool"
import TeacherCard from "./TeacherCard"
const teachersData = [
    {
      "name": "डा० लाखन सिंह",
      "post": "प्रधानाचार्य",
      "qual": "M.Sc. B.Ed. Ph.D"
    },
    {
      "name": "श्री अक्षय कुमार भार्गव",
      "post": "उप प्रधानाचार्य",
      "qual": "M.A. M.Ed"
    },
    {
      "name": "श्री पंकज वर्मा",
      "post": "स. अध्यापक",
      "qual": "M.A. B.Ed"
    },
    {
      "name": "श्री ज्ञान प्रकाश सिंह",
      "post": "स. अध्यापक",
      "qual": "M.A. B.Ed"
    },
    {
      "name": "श्री कर्णेश कुमार",
      "post": "स. अध्यापक",
      "qual": "B.Sc. MA. B.Ed"
    },
    {
      "name": "श्रीमती मीरा कुमारी",
      "post": "स. अध्यापिका",
      "qual": "M.A. B.Ed"
    },
    {
      "name": "डा०कपिल चन्द्र अग्रवाल",
      "post": "स. अध्यापक",
      "qual": "M.Sc. B.Ed. Ph.D"
    },
    {
      "name": "श्रीमती ऋचा सिंह",
      "post": "स. अध्यापिका",
      "qual": "M.A. B.Ed M.Phil"
    },
    {
      "name": "श्री संतोष कुमार खरवार",
      "post": "स. अध्यापक",
      "qual": "M.A. B.Ed"
    },
    {
      "name": "श्री सत्येन्द्र कुमार",
      "post": "स. अध्यापक",
      "qual": "M.A. B.Ed. IGD"
    },
    {
      "name": "श्री दीपक सिंह",
      "post": "स. अध्यापक",
      "qual": "M.A. M.Ed"
    },
    {
      "name": "श्री मुकेश कुमार",
      "post": "स. अध्यापक",
      "qual": "M.Sc. B.Ed"
    },
    {
      "name": "श्रीमती पूनम शर्मा",
      "post": "स. अध्यापिका",
      "qual": "M.A. B.Ed"
    },
    {
      "name": "श्रीमती कविता",
      "post": "स. अध्यापिका",
      "qual": "M.A. B.Ed"
    },
    {
      "name": "श्रीमती मीरा कुमारी",
      "post": "स. अध्यापिका",
      "qual": "M.A. B.Ed"
    },
    {
      "name": "श्री सुरेन्द्र सिंह",
      "post": "वरिष्ठ लिपिक",
      "qual": ""
    },
    {
      "name": "श्री देवीलाल",
      "post": "लिपिक",
      "qual": ""
    },
    {
      "name": "श्री विकास मित्तल",
      "post": "कार्यालय सहायक",
      "qual": ""
    }
  ];
const Staff = () => {
  return (
    <>
    <div className="flex flex-wrap gap-3 align-center justify-center p-10">
    {teachersData.map((teacher, index) => (
      <TeacherCard key={index} {...teacher} />
    ))}
</div>
    </>

  )
}

export default Staff