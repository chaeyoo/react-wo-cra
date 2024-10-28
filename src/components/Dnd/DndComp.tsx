import styled from "@emotion/styled";
import { useState, useCallback, useRef, useEffect } from "react";
import { DraggableListProps, DragItem, Position } from "./Dnd.types";
import { Container, DraggableItem } from "./Dnd.styles";

const DraggableList: React.FC<DraggableListProps> = ({
  items: initialItems,
}) => {
  const [items, setItems] = useState<DragItem[]>(initialItems);
  const [draggedItem, setDraggedItem] = useState<DragItem | null>(null);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [startPosition, setStartPosition] = useState<Position | null>(null);
  const [currentPosition, setCurrentPosition] = useState<Position | null>(null);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleStart = useCallback(
    (e: React.TouchEvent | React.MouseEvent, item: DragItem, index: number) => {
      const position = {
        x: "touches" in e ? e.touches[0].clientX : e.clientX,
        y: "touches" in e ? e.touches[0].clientY : e.clientY,
      };

      setStartPosition(position);
      setCurrentPosition({ x: 0, y: 0 });
      setDraggedItem(item);
      setDraggedIndex(index);
    },
    []
  );

  const containerRef = useRef<HTMLDivElement>(null);
  // 터치/마우스 이동 처리
  const handleMove = useCallback(
    (e: TouchEvent | MouseEvent) => {
      if (!draggedItem || !startPosition || !containerRef.current) return;

      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      const containerRect = containerRef.current.getBoundingClientRect();
      const moveDistance = clientY - startPosition.y;

      const itemHeight = itemRefs.current[0]?.offsetHeight || 47; // 기본값으로 47px

      const minY = -draggedIndex! * itemHeight;
      const maxY = (items.length - draggedIndex! - 1) * itemHeight;
      const boundedDistance = Math.max(minY, Math.min(moveDistance, maxY));

      requestAnimationFrame(() => {
        setCurrentPosition({
          x: 0,
          y: boundedDistance,
        });

        const itemElements = itemRefs.current.filter(Boolean);
        itemElements.forEach((element, index) => {
          if (!element || index === draggedIndex) return;

          const rect = element.getBoundingClientRect();
          if (clientY >= rect.top && clientY <= rect.bottom) {
            itemElements.forEach((el) => el?.classList.remove("drag-over"));
            element.classList.add("drag-over");

            if (draggedIndex !== index) {
              const isMovingUp = index < draggedIndex!;
              setItems((prevItems) => {
                const newItems = [...prevItems];
                const [removed] = newItems.splice(draggedIndex!, 1);
                newItems.splice(index, 0, removed);
                setDraggedIndex(index);

                setCurrentPosition((current) => ({
                  x: 0,
                  y: isMovingUp ? -itemHeight : itemHeight,
                }));

                return newItems;
              });
            }
          }
        });
      });
    },
    [draggedItem, draggedIndex, startPosition, items.length]
  );

  const handleEnd = useCallback(() => {
    if (!draggedItem) return;

    const elements = document.querySelectorAll(".drag-over");
    elements.forEach((el) => {
      el.classList.remove("drag-over");
    });

    setDraggedItem(null);
    setDraggedIndex(null);
    setStartPosition(null);
    setCurrentPosition(null);
  }, [draggedItem]);

  useEffect(() => {
    if (draggedItem) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [draggedItem, handleMove, handleEnd]);

  return (
    <Container ref={containerRef}>
      {items.map((item, index) => (
        <DraggableItem
          key={item.id}
          ref={(el) => (itemRefs.current[index] = el)}
          isDragging={draggedItem?.id === item.id}
          draggedTop={currentPosition?.y ?? 0}
          onMouseDown={(e) => handleStart(e, item, index)}
          onTouchStart={(e) => handleStart(e, item, index)}
        >
          {item.content}
        </DraggableItem>
      ))}
    </Container>
  );
};

export default DraggableList;
