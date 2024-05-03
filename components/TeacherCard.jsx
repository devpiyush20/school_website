
const TeacherCard = ({name,post, qual}) => {
  return (
    <div class="max-w-xl rounded overflow-hidden shadow-lg bg-white">
  <div class="px-8 py-6">
    <div class="font-bold text-2xl mb-4 text-gray-800">{name}</div>
    <p class="text-gray-700 text-lg mb-6">{post}</p>
    {qual.length?<p class="text-gray-800">योग्यता : {qual}</p>:""}
  </div>
</div>


  

  )
}

export default TeacherCard