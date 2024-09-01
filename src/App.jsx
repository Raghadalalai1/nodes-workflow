import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Handle,
} from 'reactflow';
import 'reactflow/dist/style.css';

const CustomNode = ({ id, data, deleteNode }) => {
  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '5px', background: '#fff' }}>
      <Handle type="target" position="top" style={{ background: '#555' }} />
      <div>{data.label}</div>
      <button
        style={{
          padding: '5px 10px',
          background: '#ff4d4d',
          color: '#fff',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
        onClick={() => deleteNode(id)}  
      >
        Delete
      </button>
      <Handle type="source" position="bottom" style={{ background: '#555' }} />
    </div>
  );
};


const nodeTypes = {
  customNode: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: { label: 'Input Node' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'customNode',
    data: { label: 'Default Node' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'customNode',
    data: { label: 'Output Node' },
    position: { x: 400, y: 100 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
];

function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: 'customNode',
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 250, y: Math.random() * 250 },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  const deleteNode = useCallback(
    (id) => {
      setNodes((nds) => nds.filter((node) => node.id !== id));
      setEdges((eds) => eds.filter((edge) => edge.source !== id && edge.target !== id));
    },
    [setNodes, setEdges]
  );

  
  const nodeTypesWithDelete = useMemo(() => ({
    customNode: (props) => <CustomNode {...props} deleteNode={deleteNode} />,
  }), [deleteNode]);

  return (
    <ReactFlowProvider>
      <div style={{ height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypesWithDelete} 
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
        <button onClick={addNode} style={{ position: 'absolute', top: 10, left: 10 }}>
          Add Node
        </button>
      </div>
    </ReactFlowProvider>
  );
}

export default FlowChart;
