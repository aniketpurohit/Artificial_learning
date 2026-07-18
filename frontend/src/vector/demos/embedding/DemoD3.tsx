"use client";

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function DemoD3() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Clear any existing SVG content (fixes React StrictMode double-rendering)
    d3.select(svgRef.current).selectAll("*").remove();

    // Static Word Embedding Data
    const dataset = [
      { word: "Cat", x: 15, y: 85, group: "animal", color: "#fb7185" }, // rose-400
      { word: "Dog", x: 20, y: 80, group: "animal", color: "#fb7185" },
      { word: "Wolf", x: 10, y: 90, group: "animal", color: "#fb7185" },
      { word: "Sedan", x: 85, y: 15, group: "vehicle", color: "#38bdf8" }, // sky-400
      { word: "Truck", x: 90, y: 10, group: "vehicle", color: "#38bdf8" },
      { word: "Bus", x: 80, y: 20, group: "vehicle", color: "#38bdf8" },
      { word: "Apple", x: 80, y: 80, group: "food", color: "#34d399" }, // emerald-400
      { word: "Banana", x: 85, y: 85, group: "food", color: "#34d399" },
      { word: "Bread", x: 75, y: 75, group: "food", color: "#34d399" },
    ];

    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const width = 600 - margin.left - margin.right;
    const height = 450 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 600 450`)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Setup Scales
    const xScale = d3.scaleLinear().domain([0, 100]).range([0, width]);
    const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);

    // Draw Gridlines
    svg.append("g")
      .attr("class", "grid")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSize(-height).tickFormat(() => "").ticks(10))
      .style("stroke", "#ffffff0a")
      .style("stroke-dasharray", "3,3");

    svg.append("g")
      .attr("class", "grid")
      .call(d3.axisLeft(yScale).tickSize(-width).tickFormat(() => "").ticks(10))
      .style("stroke", "#ffffff0a")
      .style("stroke-dasharray", "3,3");

    // Draw Axes (Hidden main lines, just ticks)
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(xScale).ticks(5))
      .attr("color", "#6b7280");

    svg.append("g")
      .call(d3.axisLeft(yScale).ticks(5))
      .attr("color", "#6b7280");

    // Add Data Points
    const nodes = svg.selectAll("g.node")
      .data(dataset)
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${xScale(d.x)},${yScale(d.y)})`);

    // Draw glowing circles
    nodes.append("circle")
      .attr("r", 8)
      .style("fill", d => d.color)
      .style("stroke", "#fff")
      .style("stroke-width", 1.5)
      .style("filter", "drop-shadow(0px 0px 4px rgba(255,255,255,0.3))");

    // Add Labels
    nodes.append("text")
      .text(d => d.word)
      .attr("x", 12)
      .attr("y", 4)
      .style("fill", "#e5e7eb") // gray-200
      .style("font-family", "monospace")
      .style("font-size", "12px");

  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4 flex-shrink-0 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Static D3.js Clusters</h2>
        <p className="text-gray-400 text-sm">
          Semantic clusters showing word embeddings grouped by contextual meaning.
        </p>
      </div>

      <div className="flex-grow w-full overflow-hidden flex items-center justify-center bg-black/20 rounded-xl border border-white/5">
        <svg ref={svgRef} className="w-full max-w-2xl h-auto" />
      </div>
    </div>
  );
}