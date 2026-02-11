function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="bg-slate-400 text-white p-2 rounded-md">
          {tasks.title}
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
