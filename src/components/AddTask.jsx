import { useState } from "react";

function AddTask({ onAddTaskSumit }) {
  const [title, setTitle] = useState("");
  const [descripton, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite o descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={descripton}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          // verificar se tem conteudo
          if (!title.trim || !descripton.trim) {
            return alert(
              "Preencha o titulo e a descrição para concluir a tarefa!",
            );
          }
          onAddTaskSumit(title, descripton);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
