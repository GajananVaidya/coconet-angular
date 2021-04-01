import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, HostListener } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface LeftNavLinks {
  name: string;
  icon: string;
  children?: LeftNavLinks[];
  path?: string;
}

const TREE_DATA: LeftNavLinks[] = [
  {
    name: 'Home',
    icon: 'home',
    path: '/login',
  },

  {
    name: 'Indent requests',
    icon: 'list',
    children: [
      {
        name: 'My Request',
        icon: 'list',
        path: 'my-requests',
      }, {
        name: 'Awaiting my approvals',
        icon: 'list',
        path: 'my-approval-requests',
      }
    ]
  },
  {
    name: 'Settings',
    path: 'settings',
    icon: 'build'
  }
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent {
  treeControl = new NestedTreeControl<LeftNavLinks>(node => node.children);
  dataSource = new MatTreeNestedDataSource<LeftNavLinks>();

  constructor(private element: ElementRef) {
    this.dataSource.data = TREE_DATA;
  }

  @HostListener('mouseout', ['$event'])
  collapseAllNode = (event: MouseEvent) => {
    if (!(this.element.nativeElement as HTMLElement).contains(event.relatedTarget as HTMLElement)) {
      this.treeControl.collapseAll();
    }
  }
  hasChild = (_: number, node: LeftNavLinks) => !!node.children && node.children.length > 0;
}