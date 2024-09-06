import { faAddressBook, faCircleCheck, faEnvelope, faEye } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faCaretUp, faCircle, faCommentSms, faLayerGroup, faPlug, faPlugCircleCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback, useMemo, useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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


const CustomNode = ({ id, data, deleteNode, isSelected, addNode }) => {
  const [showContainer, setShowContainer] = useState(false);
  const [nodes, setNodes] = useState([]);



  const handleClick = () => {
    setShowContainer(!showContainer);
  };
  return (

    <div style={{ padding: '20px 30px',width:'300px', border: '1px solid #ddd', borderRadius: '5px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between',gap:'20px', borderLeftColor: 'red', borderLeftWidth: '6px', position: 'relative' }} onClick={handleClick}>

      <Handle type="target" position="top" style={{ background: 'green' }} />
      <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
      <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ff0000", }} />
      <div>
        <h4 style={{ fontWeight: 'bold',marginBottom:'10px' }}>sourse</h4>
        <h5 >Aotomation database contacts</h5>
      </div>


      <Handle type="source" position="bottom" style={{ background: 'green' }} />

      {showContainer && (
        <div style={{
          position: 'absolute',
          top: '1px',
          right: '-222px',
          backgroundColor: '#fff',
          padding: '10px',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          width: '200px',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          transition: '0.5s'
        }}>
          <button
            style={{ marginRight: '10px', border: '1px solid gray', borderRadius: '20PX', background: 'white', padding: '5px 10px', color: 'gray', cursor: 'pointer' }}
            onClick={() => addNode('example1Node', { label: 'Prope 1' })}
          >
            Prope 1
          </button>
          <button
            style={{ marginRight: '10px', border: '1px solid gray', borderRadius: '20PX', background: 'white', padding: '5px 10px', color: 'gray', cursor: 'pointer' }}
            onClick={() => addNode('example1Node1', { label: 'Prope 2' })}
          >
            Prope 2
          </button>
        </div>
      )}
    </div>);
}





const EmailNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px', border: '1px solid #ddd', background: 'white', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-around', borderLeftColor: '#3498db', borderLeftWidth: '6px', position: 'relative',gap:'20px' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#005eff", }} />
    <div>
      <h4 style={{ color: '#3498db', fontWeight: 'bold',marginBottom:'10px' }}>email</h4>
      <h5 style={{ color: '#3498db' }}>send email to contact</h5>
    </div>



    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

const PasswordNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: '1px solid #ddd', background: 'white', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#e67e22', borderLeftWidth: '6px', position: 'relative' }}>
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faEye} style={{ color: '#e67e22' }} />
    <Handle type="target" position="top" style={{ background: 'green' }} />


    <div>
      <h4 style={{ color: '#e67e22', fontWeight: 'bold',marginBottom:'10px' }}>password</h4>
      <h5 style={{ color: '#e67e22' }}>check your password</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

const Example1Node = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ff0000", }} />
    <div>
      <h4 style={{ fontWeight: 'bold' ,marginBottom:'10px'}}>Source</h4>
      <h5>Original Source</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node1 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ff0000", }} />
    <div>
      <h4 style={{ fontWeight: 'bold' ,marginBottom:'10px'}}>Source</h4>
      <h5 > Offline Source </h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node2 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#3498db", }} />
    <div>
      <h4 style={{ fontWeight: 'bold' ,marginBottom:'10px'}}>email</h4>
      <h5 > email type </h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node3 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faEnvelope} style={{ color: "#005eff", }} />
    <div>
      <h4 style={{ fontWeight: 'bold',marginBottom:'10px' }}>email</h4>
      <h5 > email adress</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node4 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faEye} style={{ color: '#e67e22' }} />
    <div>
      <h4 style={{ fontWeight: 'bold',marginBottom:'10px' }}>password</h4>
      <h5 >password length</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node5 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faEye} style={{ color: '#e67e22' }} />
    <div>
      <h4 style={{ fontWeight: 'bold',marginBottom:'10px' }}>password</h4>
      <h5 > password sequence</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node6 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#2ecc71' }} />
    <div>
      <h4 style={{ fontWeight: 'bold',marginBottom:'10px' }}>Login</h4>
      <h5 >please login</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node77 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#2ecc71' }} />
    <div>
      <h4 style={{ fontWeight: 'bold',marginBottom:'10px' }}>Login</h4>
      <h5 >logOut</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node8 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faCommentSms} style={{ color: "#8e44ad", }} />
    <div>
      <h4 style={{ fontWeight: 'bold',marginBottom:'10px' }}>SMS</h4>
      <h5 > text message</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);
const Example1Node9 = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: 'none', boxShadow: '0 2px 5px rgba(0,0,0,0.2)', borderRadius: '5px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#2ecc71', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faCommentSms} style={{ color: "#8e44ad", }} />
    <div>
      <h4 style={{ fontWeight: 'bold',marginBottom:'10px' }}>SMS</h4>
      <h5 > Person name</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);


const HomeNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',width:'300px',gap:'20px', border: '1px solid #ddd', background: 'white', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderLeftColor: '#8e44ad', borderLeftWidth: '6px', position: 'relative' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faCommentSms} style={{ color: "#8e44ad", }} />

    <div>
      <h4 style={{ color: '#8e44ad', fontWeight: 'bold',marginBottom:'10px' }}>sms</h4>
      <h5 style={{ color: '#8e44ad' }}>send sms to contact</h5>
    </div>

    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);

const LoginNode = ({ id, data, deleteNode }) => (
  <div style={{ padding: '20px 30px',gap:'20px',width:'300px', border: '1px solid #ddd', background: 'white', borderRadius: '5px', borderLeftColor: '#1abc9c', borderLeftWidth: '6px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Handle type="target" position="top" style={{ background: 'green' }} />
    <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000", position: 'absolute', right: '5px', top: '2px' }} onClick={() => deleteNode(id)} />
    <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#2ecc71' }} />

    <div>
      <h4 style={{ color: '#1abc9c', fontWeight: 'bold' ,marginBottom:'10px'}}>new rule</h4>
      <h5 style={{ color: '#1abc9c' }}>check behavour of the rule</h5>
    </div>


    <Handle type="source" position="bottom" style={{ background: 'green' }} />
  </div>
);







// Node Types Definition


// Initial Nodes and Edges
const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    data: { label: 'Input Node' },
    position: { x: 400, y: 5 },
  },

];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, label: 'animated adge' },
];

function FlowChart() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [add, setadd] = useState(true);
  const [showNodeInfo, setShowNodeInfo] = useState(false);
  const [selectedNodeType, setSelectedNodeType] = useState(null);

  const NodeInfo = ({ showNodeInfo, selectedNodeType }) => {
    const nodeTypes = useMemo(() => ({
      customNode: { title: 'The properties of Source Node:', title1: 'Original Source', titel2: 'Offline Source', description: 'This is a custom node voluptatibus officiis suscipit optio a, necessitatibus numquam commodi', style: { backgroundColor: 'white', borderColor: 'red', height: '83vh', top: '82px', color: 'red' }, icon:faLayerGroup },
      emailNode: { title: 'The properties of Email Node:', title1: 'Email Type', titel2: 'Email Address', description: 'This node handles email operations Provident cumque, atque quia quidem alias deleniti o', style: { backgroundColor: '#eaf4fc', borderColor: '#3498db', height: '69vh', top: '180px', color: '#3498db' },icon: faEnvelope },
      passwordNode: { title: 'The properties of Password Node:', title1: 'Password Length', titel2: 'Password Sequence', description: 'This node manages password-related actions Provident ', style: { backgroundColor: '#fde3cf', borderColor: '#e67e22', height: '55vh', top: '275px', color: '#e67e22' },icon:faEye },
      homeNode: { title: 'The properties of Home Node:', title1: 'Text Message', titel2: 'Person Name', description: 'This node represents the home or starting ', style: { backgroundColor: '#f5e6f7', borderColor: '#8e44ad', height: '41vh', top: '400px', color: '#8e44ad' },icon: faCommentSms },
      loginNode: { title: 'The properties of Login Node:', title1: 'Login', titel2: 'Logout', description: 'This node handles login functionality ', style: { backgroundColor: '#e8f8f5', borderColor: '#1abc9c', height: '32vh', top: '500px', color: '#1abc9c' },icon:faCircleCheck },
    }), []);
  
    return (
      <div style={{
        display: showNodeInfo ? 'block' : 'none',
        position: 'absolute',
        top: nodeTypes[selectedNodeType]?.style.top,
        left: '0',
        width: '345px',
        padding: '20px',
        backgroundColor: nodeTypes[selectedNodeType]?.style.backgroundColor,
        boxShadow: '0 5px 5px 1px gray',
        borderRadius: '5px',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '0px',
        borderRight: '2px solid',
        borderColor: nodeTypes[selectedNodeType]?.style.borderColor,
        height: nodeTypes[selectedNodeType]?.style.height,
      }}>
       <div style={{
        display:'flex',
        alignItems:'center',
        borderBottom: '1px solid black',
        marginBottom:'30px', marginBottom:'15px',
        paddingBottom:'15px'
       }}>
       <FontAwesomeIcon icon={nodeTypes[selectedNodeType]?.icon} style={{ marginRight: '10px', color: nodeTypes[selectedNodeType]?.style.color }} />
       <h3 style={{   color: nodeTypes[selectedNodeType]?.style.color }}>{nodeTypes[selectedNodeType]?.title}</h3>
       </div>
        <p style={{ marginBottom:'30px',}}>{nodeTypes[selectedNodeType]?.description}</p>
        <div style={{display:'flex', alignItems:'center',marginBottom:'30px',}}>
          <FontAwesomeIcon icon={faArrowRight} style={{color: nodeTypes[selectedNodeType]?.style.color, marginRight:'10px'}} /> 
          <h4 style={{cursor:'pointer'}} onClick={() => handleAddNode(nodeTypes[selectedNodeType]?.title1)}>{nodeTypes[selectedNodeType]?.title1}</h4>
        </div>
        <div style={{display:'flex', alignItems:'center',marginBottom:'30px',}}>
          <FontAwesomeIcon icon={faArrowRight} style={{color: nodeTypes[selectedNodeType]?.style.color, marginRight:'10px'}} />  
          <h4 style={{cursor:'pointer'}} onClick={() => handleAddNode(nodeTypes[selectedNodeType]?.titel2)}>{nodeTypes[selectedNodeType]?.titel2}</h4>
        </div>
      </div>
    );
  };





  const handleClick = (nodeType) => {
    setShowNodeInfo(!showNodeInfo);
    setSelectedNodeType(nodeType);
    setIsAddingNode(false);
  };
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const handleAddNode = (title) => {
    switch(title) {
      case 'Original Source':
        return addNode('example1Node');
      case 'Offline Source':
        return addNode('example1Node1');
      case 'Email Type':
        return addNode('example1Node2');
      case 'Email Address':
        return addNode('example1Node3');
      case 'Password Length':
        return addNode('example1Node4');
      case 'Password Sequence':
        return addNode('example1Node5');
      case 'Login':
        return addNode('example1Node6');
      case 'Logout':
        return addNode('example1Node77');
      case 'Text Message':
        return addNode('example1Node8');
      case 'Person Name':
        return addNode('example1Node9');
      default:
        console.log(`No action defined for title: ${title}`);
        return null;
    }
  };


  const addNode = useCallback(
    (type, data) => {
      const newNode = {
        id: `${Date.now()}`,
        type,
        data: { label: `${type.charAt(0).toUpperCase() + type.slice(1)} Node` },
        position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
      };
      setNodes((nds) => nds.concat(newNode));
    },
    [setNodes]
  );

  const deleteNode = useCallback(
    (id) => {
      setNodes((nds) => nds.filter((node) => node.id !== id));
      setEdges((eds) => eds.filter((edge) => edge.source !== id && edge.target !== id));
    },
    [setNodes, setEdges]
  );


  const nodeTypesWithDelete = (deleteNode) => ({
    customNode: (props) => <CustomNode {...props} deleteNode={deleteNode} addNode={addNode} />,
    emailNode: (props) => <EmailNode {...props} deleteNode={deleteNode} addNode={addNode}/>,
    passwordNode: (props) => <PasswordNode {...props} deleteNode={deleteNode} addNode={addNode}/>,
    example1Node: (props) => <Example1Node {...props} deleteNode={deleteNode} />,
    example1Node1: (props) => <Example1Node1 {...props} deleteNode={deleteNode} />,
    example1Node2: (props) => <Example1Node2 {...props} deleteNode={deleteNode} />,
    example1Node3: (props) => <Example1Node3 {...props} deleteNode={deleteNode} />,
    example1Node4: (props) => <Example1Node4 {...props} deleteNode={deleteNode} />,
    example1Node5: (props) => <Example1Node5 {...props} deleteNode={deleteNode} />,
    example1Node6: (props) => <Example1Node6 {...props} deleteNode={deleteNode} />,
    example1Node77: (props) => <Example1Node77 {...props} deleteNode={deleteNode} />,
    example1Node8: (props) => <Example1Node8 {...props} deleteNode={deleteNode} />,
    example1Node9: (props) => <Example1Node9 {...props} deleteNode={deleteNode} />,
    homeNode: (props) => <HomeNode {...props} deleteNode={deleteNode} addNode={addNode}/>,
    loginNode: (props) => <LoginNode {...props} deleteNode={deleteNode} addNode={addNode}/>,
  });


  const nodeTypes = useMemo(() => nodeTypesWithDelete(deleteNode, setNodes), [deleteNode, setNodes]);

  return (
    <ReactFlowProvider>
      <div style={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          edgerenderer={'button'}
          edgerendererprops={{ type: 'custom' }}

        >

          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
        <button onClick={() => setadd(!add)} style={{ borderRadius: '5px', position: 'absolute', border: 'none', padding: '5px 10px', top: 10, left: 10, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', boxShadow: '0 0 5px 1px gray', cursor: 'pointer' }}>Create Node</button>
        <div style={{ borderRadius: '5px', position: 'absolute', width: '345px', padding: '10px 20px', top: 40, left: 10, display: 'flex', flexDirection: 'column',justifyContent:'space-around', backgroundColor: '#fff', transition: '0.4s', boxShadow: '0px 5px 5px 1px gray', opacity: `${add ? 0 : 1}`, height: `${add ? '0px' : '70vh'}`, overflow: `${add ? 'hidden' : 'visible'}` }} >
    
    <NodeInfo showNodeInfo={showNodeInfo} selectedNodeType={selectedNodeType} />

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button style={{cursor:'pointer', width: '150px', backgroundColor: "#fff", borderRadius: '5px', border: "1px solid gray", padding: "6px 10px", margin: '10px' }} onClick={() => addNode('customNode')}>Add Custom Node</button>
      <FontAwesomeIcon icon={faCaretUp} style={{ cursor:'pointer',color: "#a8a8a8", }} onClick={() => handleClick('customNode')}/>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button style={{cursor:'pointer', width: '150px', backgroundColor: "#eaf4fc", border: "1px solid gray", padding: "6px 10px", margin: '10px', border: '2px solid #3498db', color: '#3498db', borderRadius: '5px' }} onClick={() => addNode('emailNode')}>Add Email Node</button>
      <FontAwesomeIcon icon={faCaretUp} style={{cursor:'pointer', color: "#3498db", }} onClick={() => handleClick('emailNode')}/>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button style={{cursor:'pointer', width: '150px', backgroundColor: "#fff", border: "1px solid gray", padding: "6px 10px", margin: '10px', border: '2px solid #e67e22', borderRadius: '5px', background: '#fde3cf', color: '#e67e22' }} onClick={() => addNode('passwordNode')}>Add Password Node</button>
      <FontAwesomeIcon icon={faCaretUp} style={{cursor:'pointer', color: "#e67e22", }} onClick={() => handleClick('passwordNode')}/>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button style={{cursor:'pointer', width: '150px',backgroundColor: "#fff", border: "1px solid gray", padding: "6px 10px", margin: '10px', border: '2px solid #8e44ad', borderRadius: '5px', background: '#f5e6f7', color: '#8e44ad' }} onClick={() => addNode('homeNode')}>Add Home Node</button>
      <FontAwesomeIcon icon={faCaretUp} style={{cursor:'pointer', color: "#8e44ad", }} onClick={() => handleClick('homeNode')}/>
    </div>

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <button style={{ cursor:'pointer',   width: '150px', backgroundColor: "#fff", border: "1px solid gray", padding: "6px 10px", margin: '10px', border: '2px solid #1abc9c', borderRadius: '5px', background: '#e8f8f5', color: '#1abc9c' }} onClick={() => addNode('loginNode')}>Add Login Node</button>
      <FontAwesomeIcon icon={faCaretUp} style={{cursor:'pointer', color: "#1abc9c", }} onClick={() => handleClick('loginNode')}/>
    </div>

  </div>
      </div>
    </ReactFlowProvider>
  );
}

export default FlowChart;

