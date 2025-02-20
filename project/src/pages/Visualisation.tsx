import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

const DerivativesMindMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const width = 800;
    const height = 600;

    const data: TreeNode = {
      name: "Derivatives",
      children: [
        {
          name: "Limits",
          children: [
            { name: "Definition" },
            { name: "Continuity" },
            { name: "L'Hôpital's Rule" },
          ],
        },
        {
          name: "Rules",
          children: [
            { name: "Power Rule" },
            { name: "Product Rule" },
            { name: "Quotient Rule" },
            { name: "Chain Rule" },
          ],
        },
        {
          name: "Applications",
          children: [
            { name: "Maxima & Minima" },
            { name: "Tangent & Normal" },
            { name: "Rate of Change" },
            { name: "Optimization" },
          ],
        },
        {
          name: "Higher Order",
          children: [
            { name: "Second Derivative" },
            { name: "Concavity & Inflection" },
            { name: "Taylor Series" },
          ],
        },
      ],
    };

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

      svg.append("text")
      .attr("x", width / 2)
      .attr("y", 30)
      .attr("text-anchor", "middle")
      .attr("font-size", "24px")
      .attr("font-weight", "bold")
      .text("Mindmap for the chapter: Derivatives");

    const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);

    const root = d3.hierarchy<TreeNode>(data);
    const treeLayout = d3.tree<TreeNode>().size([360, 200]);
    treeLayout(root);

    // Create links
    g.selectAll(".link")
      .data(root.links())
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-width", 2)
      .attr("d", (d) => {
        return `
          M${project(d.source.x, d.source.y)}
          L${project(d.target.x, d.target.y)}
        `;
      });

    // Create nodes
    const node = g
      .selectAll(".node")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${project(d.x, d.y)})`);

    node.append("circle").attr("r", 6).attr("fill", "#007bff");


    node
      .append("text")
      .attr("dy", "0.35em")
      .attr("x", (d) => (d.x < 180 ? 10 : -10))
      .attr("text-anchor", (d) => (d.x < 180 ? "start" : "end"))
      .attr("transform", (d) => (d.x < 180 ? null : "rotate(180)"))
      .text((d) => d.data.name)
      .style("fill", "#333")
      .style("font-size", "14px")
      .attr("transform", (d) => {
        const angle = (d.x * 180) / Math.PI; // Convert radians to degrees
        return angle > 90 || angle < -90
          ? `rotate(${0})`
          : `rotate(${180})`;
      });

    function project(x: number, y: number): [number, number] {
      const angle = (x - 90) * (Math.PI / 180);
      return [y * Math.cos(angle), y * Math.sin(angle)];
    }
  }, []);

  return <svg ref={svgRef} className="w-full h-full border rounded-lg"></svg>;
};

export default DerivativesMindMap;
