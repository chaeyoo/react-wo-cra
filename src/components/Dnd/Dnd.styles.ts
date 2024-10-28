import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 20px;
  width: 300px;
  min-height: 200px;
  border: 1px solid #eee;
  position: relative;
  overflow: hidden;
`;

export const DraggableItem = styled.div<{
  isDragging?: boolean;
  draggedTop?: number;
}>`
  padding: 15px;
  margin: 5px 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  user-select: none;
  touch-action: none;
  cursor: grab;
  position: relative;
  transform: ${({ isDragging, draggedTop }) =>
    isDragging ? `translateY(${draggedTop}px)` : "none"};
  transition: transform 0.15s ease;

  ${({ isDragging }) =>
    isDragging &&
    `
    opacity: 0.5;
    background: #f0f0f0;
    cursor: grabbing;
    z-index: 1000;
  `}

  &.drag-over {
    border: 2px dashed #666;
  }
`;
