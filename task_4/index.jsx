import { Component, createRef, useImperativeHandle } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent ref={this.myRef} />  {/* set ref to controll child component */}
            </>
        );
    }
};

const ChildComponent = forwardRef((props, ref) => {
    const [isShown, setIsShown] = useState(true);
    useImperativeHandle(ref, () => ({
        toggleButton: () => setIsShown(!isShown),
    }));
  
    return isShown ? <div>child component</div> : null;
});
