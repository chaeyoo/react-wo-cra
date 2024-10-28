export interface DragItem {
  id: number;
  content: string;
}

export interface DraggableListProps {
  items: DragItem[];
}

export interface Position {
  x: number;
  y: number;
}
