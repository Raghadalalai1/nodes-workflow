import { faCircleCheck, faEnvelope, faEye } from '@fortawesome/free-regular-svg-icons';
import { faCommentSms, faLayerGroup, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useMemo, useState } from 'react';
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

// Custom Node Components
const CustomNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px', border: '1px solid #ddd', borderRadius: '5px', background: '#fff' ,display:'flex',alignItems:'center',justifyContent:'space-between',gap: '20px' ,borderLeftColor:'red',borderLeftWidth:'6px',position:'relative'}}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",position:'absolute',right:'5px',top:'2px'}}  onClick={() => deleteNode(id)}/>
    <FontAwesomeIcon icon={faLayerGroup} style={{color: "#ff0000",}} />
    <div><input type="text" placeholder='source' style={{border:'1px solid gray',outline:'none', padding:'5px', borderRadius:'3px' ,width:'150px'}}/></div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

const EmailNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px', border: '2px solid #3498db', borderRadius: '5px',gap: '20px', background: '#eaf4fc' ,display:'flex',alignItems:'center',justifyContent:'space-around',borderLeftColor:'#3498db',borderLeftWidth:'6px',position:'relative'}}>
        <Handle type="target" position="top" style={{ background: 'green' }} />
        <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",position:'absolute',right:'5px',top:'2px'}}  onClick={() => deleteNode(id)}/>
        <FontAwesomeIcon icon={faEnvelope} style={{color: "#005eff",}} />
        <div>
   <h4 style={{ color: '#3498db', fontWeight: 'bold' }}>email</h4>
   <h5 style={{ color: '#3498db' }}>send email to contact</h5>
   </div>
    


    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

const PasswordNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',gap: '20px', border: '2px solid #e67e22', borderRadius: '5px', background: '#fde3cf' ,display:'flex',alignItems:'center',justifyContent:'space-between',borderLeftColor:'#e67e22',borderLeftWidth:'6px',position:'relative' }}>
    <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",position:'absolute',right:'5px',top:'2px'}}  onClick={() => deleteNode(id)}/>
    <FontAwesomeIcon icon={faEye} style={{color:'#e67e22'}}/>
        <Handle type="target" position="top" style={{ background: 'green' }} />

   
    <div>
   <h4 style={{ color: '#e67e22', fontWeight: 'bold' }}>password</h4>
   <h5 style={{ color: '#e67e22' }}>check your password</h5>
   </div>


    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

const Example1Node = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',gap: '20px', border: '2px solid #2ecc71', borderRadius: '5px', background: '#eafaf1'  ,display:'flex',alignItems:'center',justifyContent:'space-between',borderLeftColor:'#2ecc71',borderLeftWidth:'6px',position:'relative'}}>
        <Handle type="target" position="top" style={{ background: '#555' }} />
        <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",position:'absolute',right:'5px',top:'2px'}}  onClick={() => deleteNode(id)}/>
   
    <div style={{ color: '#2ecc71', fontWeight: 'bold' }}>{data.label}</div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

const HomeNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',gap: '20px', border: '2px solid #8e44ad', borderRadius: '5px', background: '#f5e6f7'  ,display:'flex',alignItems:'center',justifyContent:'space-between' ,borderLeftColor:'#8e44ad',borderLeftWidth:'6px',position:'relative'}}>
        <Handle type="target" position="top" style={{ background: 'green' }} />
<FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",position:'absolute',right:'5px',top:'2px'}}  onClick={() => deleteNode(id)}/>
<FontAwesomeIcon icon={faCommentSms} style={{color: "#8e44ad",}} />
    
    <div>
   <h4 style={{ color: '#8e44ad', fontWeight: 'bold' }}>sms</h4>
   <h5 style={{ color: '#8e44ad' }}>send sms to contact</h5>
   </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

const LoginNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',gap: '20px', border: '2px solid #1abc9c', borderRadius: '5px', background: '#e8f8f5',borderLeftColor:'#1abc9c', borderLeftWidth:'6px',position:'relative' , display:'flex',alignItems:'center',justifyContent:'space-evenly' }}>
        <Handle type="target" position="top" style={{ background: 'green' }} />
        <FontAwesomeIcon icon={faXmark} style={{color: "#ff0000",position:'absolute',right:'5px',top:'2px'}}  onClick={() => deleteNode(id)}/>
        <FontAwesomeIcon icon={faCircleCheck} style={{color:'#2ecc71'}}/>

   <div>
   <h4 style={{ color: '#1abc9c', fontWeight: 'bold' }}>new rule</h4>
   <h5 style={{ color: '#1abc9c' }}>check behavour of the rule</h5>
   </div>


    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

// Node Types Definition
const nodeTypesWithDelete = (deleteNode) => ({
  customNode: (props) => <CustomNode {...props} deleteNode={deleteNode} />,
  emailNode: (props) => <EmailNode {...props} deleteNode={deleteNode} />,
  passwordNode: (props) => <PasswordNode {...props} deleteNode={deleteNode} />,
  example1Node: (props) => <Example1Node {...props} deleteNode={deleteNode} />,
  homeNode: (props) => <HomeNode {...props} deleteNode={deleteNode} />,
  loginNode: (props) => <LoginNode {...props} deleteNode={deleteNode} />,
});

// Initial Nodes and Edges
const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: { label: 'Input Node' },
    position: { x: 250, y: 5 },
  },

];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true ,label:'animated adge'},
];

function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [add, setadd] = useState(true);


  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = (type) => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: type,
      data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node` },
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

  const nodeTypes = useMemo(() => nodeTypesWithDelete(deleteNode), [deleteNode]);

  return (
    <ReactFlowProvider>
      <div style={{ height: "100vh" , display: 'flex' , justifyContent: 'center' , alignItems: 'center'}}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
        <button onClick={() => setadd(!add)} style={{ position: 'absolute', border: 'none' , padding: '5px 10px' , top: 10, left: 10 , display: 'flex' , flexDirection: 'column' , backgroundColor: '#fff' , boxShadow: '0 0 5px 1px gray' , cursor: 'pointer'}}>Create Node</button>
        <div style={{ position: 'absolute', top: 50, left: 10 , display: 'flex',justifyContent:'space-evenly' , flexDirection: 'column' , backgroundColor: '#fff' , transition: '0.4s' , boxShadow: '0 0 5px 1px gray' , opacity: `${add ? 0 : 1}` , height: `${add ? '0px' : '70vh'}`, overflow: `${add ? 'hidden' : 'visible'}`}} >
          <button style={{ backgroundColor:"#fff" , border:"1px solid gray" , padding:"6px 10px" , margin: '10px'}} onClick={() => addNode('customNode')}>Add Custom Node</button>
          <button style={{ backgroundColor:"#eaf4fc" , border:"1px solid gray" , padding:"6px 10px" , margin: '10px', border: '2px solid #3498db' , color: '#3498db' , borderRadius: '5px'}} onClick={() => addNode('emailNode')}>Add Email Node</button>
          <button style={{ backgroundColor:"#fff" , border:"1px solid gray" , padding:"6px 10px" , margin: '10px', border: '2px solid #e67e22', borderRadius: '5px', background: '#fde3cf' , color: '#e67e22'}} onClick={() => addNode('passwordNode')}>Add Password Node</button>
          <button style={{ backgroundColor:"#fff" , border:"1px solid gray" , padding:"6px 10px" , margin: '10px',border: '2px solid #8e44ad', borderRadius: '5px', background: '#f5e6f7' ,color:'#8e44ad'}} onClick={() => addNode('homeNode')}>Add Home Node</button>
          <button style={{ backgroundColor:"#fff" , border:"1px solid gray" , padding:"6px 10px" , margin: '10px', border: '2px solid #1abc9c', borderRadius: '5px', background: '#e8f8f5' ,color:'#1abc9c'}} onClick={() => addNode('loginNode')}>Add Login Node</button>
        </div>
      </div>
    </ReactFlowProvider>
  );
}

export default FlowChart;
