"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";
import { CARD_WIDTH } from "../lib/canvasLayout";

interface DraggableCardProps {
  project: Project;
  x: number;
  y: number;
  onDragEnd: (x: number, y: number) => void;
}

export default function DraggableCard({ project, x, y, onDragEnd }: DraggableCardProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      whileDrag={{ scale: 1.03, zIndex: 50 }}
      onDragEnd={(_e, info) => {
        onDragEnd(x + info.offset.x, y + info.offset.y);
      }}
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: CARD_WIDTH,
        cursor: "grab",
      }}
      className="active:cursor-grabbing"
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}
