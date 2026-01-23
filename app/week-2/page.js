import StudentInfo from "./StudentInfo";
export default function Page() {
  return (
    <main>
      <h1 style={{
         fontSize: '1rem',           // Same size as paragraph
        fontWeight: 'normal',       // Remove bold
        margin: 0   
      }}>Shopping List</h1>
      <StudentInfo/>
    </main>
  );
}
