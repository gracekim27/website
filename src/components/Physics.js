import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import '../index.css';

const MatterGravity = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
        var Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            MouseConstraint = Matter.MouseConstraint,
            Composites = Matter.Composites,
            Mouse = Matter.Mouse,
            Composite = Matter.Composite,
            Bodies = Matter.Bodies,
            Body = Matter.Body;
    
        // create engine
        var engine = Engine.create(),
            world = engine.world;
    
        // create renderer
        var render = Render.create({
            element: container,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                showAngleIndicator: true,
                wireframes: false,
                background: 'transparent',
            }
        });
    
        Render.run(render);
    
        // create runner
        var runner = Runner.create();
        Runner.run(runner, engine);

        var stack = Composites.stack(window.innerWidth, 0, 1, 50, 2, 2, function(x, y) {
          return Bodies.circle(x, y, 15);
        });

        var vertices = [
          { x: 8*window.innerWidth/5, y: window.innerHeight/4 },
          { x: 12*window.innerWidth/4, y: window.innerHeight/4 },
          { x: 8*window.innerWidth/5, y: 5*window.innerHeight/4 }
        ];

        var slope = Matter.Bodies.fromVertices(5*window.innerWidth/6, window.innerHeight, vertices, { 
          isStatic: true,
          render: {
            fillStyle: '#FFD2D2',
            strokeStyle: '#FFEDED'
          }});

        Body.rotate(slope, Math.PI);
        
        Composite.add(world, [
            // walls
            Bodies.rectangle(0, window.innerHeight, 2*(window.innerWidth/8), 20, { 
              isStatic: true,
              render: {
                fillStyle: '#FFD2D2',
                strokeStyle: '#FFEDED'
              }}),
            Bodies.rectangle(4*window.innerWidth/5, window.innerHeight, window.innerWidth, 20, { 
              isStatic: true,
              render: {
                fillStyle: '#FFD2D2',
                strokeStyle: '#FFEDED'
              }}),
            slope,
            stack
        ]);
    
        // add mouse control
        var mouse = Mouse.create(render.canvas),
            mouseConstraint = MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: {
                    stiffness: 0.2,
                    render: {
                        visible: false
                    }
                }
            });
    
        Composite.add(world, mouseConstraint);
    
        // keep the mouse in sync with rendering
        render.mouse = mouse;
        
        
        // context for MatterTools.Demo
        return () => {
            Render.stop(render);
            Runner.stop(runner);
            if (container) {
              container.removeChild(render.canvas);
            }
          };
        }, [containerRef]);
      
        return <div ref={containerRef} className="matter-gravity-container" />;
      };
      
      export default MatterGravity;