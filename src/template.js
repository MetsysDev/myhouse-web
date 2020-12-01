import React from 'react';
import Routes from './routes'

import './styles/template.css';

function Template() {
    return (
        <div id="page-template">            
            <aside className="menu-bar">
              <div className="user">
                CA
              </div>
            </aside>

            <aside id="content">
              <div>
                < Routes />
              </div>
            </aside>
        </div>
    );
}

export default Template;