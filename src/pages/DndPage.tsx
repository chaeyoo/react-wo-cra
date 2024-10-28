import DraggableList from "@components/Dnd/DndComp";

export default function DndPage() {
  const initialItems = [
    { id: 1, content: "항목 1" },
    { id: 2, content: "항목 2" },
    { id: 3, content: "항목 3" },
  ];

  return (
    <div>
      <DraggableList items={initialItems} />
    </div>
  );
}
