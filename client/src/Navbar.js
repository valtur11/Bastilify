import React from 'react';

class Navbar extends React.Component {
    toggleCollapse = (e) => {
        //Note the difference:
        //console.log(e.target.tagName);        //SPAN
        //console.log(e.currentTarget.tagName); //BUTTON
    
        const CLASS_SHOW       = 'show';
        const CLASS_COLLAPSE   = 'collapse';
        const CLASS_COLLAPSING = 'collapsing';
        const CLASS_COLLAPSED  = 'collapsed';
        const ANIMATION_TIME   = 350; // 0.35s
        const el               = e.currentTarget;
        const collapseTargetId = el.dataset.target || el.href || null;
    
    
        if (collapseTargetId) {
          const targetEl = document.querySelector(collapseTargetId);
          let isShown    = targetEl.classList.contains(CLASS_SHOW) || targetEl.classList.contains(CLASS_COLLAPSING);
    
          if(!isShown) {
            targetEl.classList.remove(CLASS_COLLAPSE);
            targetEl.classList.add(CLASS_COLLAPSING);
            targetEl.style.height = 0
            targetEl.classList.remove(CLASS_COLLAPSED);
    
            setTimeout(
              () => {
                targetEl.classList.remove(CLASS_COLLAPSING);
                targetEl.classList.add(CLASS_COLLAPSE, CLASS_SHOW);
                targetEl.style.height = '';
              }, ANIMATION_TIME
            );
    
            targetEl.style.height = targetEl.scrollHeight + 'px';
          } else {
            targetEl.style.height = `${targetEl.getBoundingClientRect().height}px`;
          }
        }
    }
    
    render(){
        return(
            <header className="header header-gradient">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="#">{this.props.brand}</a>

          <button
            className="navbar-toggler custom-toggler"
            type="button" 
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.toggleCollapse}
          >
              <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <a href="#" className="nav-link"> Home </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link"> Laptops </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link"> Computers </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link"> Monitors </a>
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link"> Parts </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link"> Accessories </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
        )
    }
}

export default Navbar