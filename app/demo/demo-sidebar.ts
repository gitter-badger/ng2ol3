import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo-sidebar',
    template: `
      <ng2ol3 [config]="config"></ng2ol3> 
    `
})
export class DemoSidebarComponent implements OnInit {
    config: any;

    public ngOnInit(): any {

        this.config = {
            map: {
                renderer: 'canvas',
                target: 'demo-sidebar-map',
                view: {
                    projection: "EPSG:900913",
                    center: ol.proj.fromLonLat([19.3956393810065, 47.168464955013], "EPSG:900913"),
                    zoom: 7
                },
                layers: [
                    {
                        type: 'layergroup',
                        name: 'Base layers',
                        children: [
                            {
                                type: 'layer',
                                name: 'OpenStreetMap layer',
                                layer: new ol.layer.Tile({
                                    source: new ol.source.OSM()
                                })
                            }
                        ]
                    }
                ]
            },
            sidebar: {
                collapsible: true,
                opened: true,
                toolbar: {}
            }
        }

    }

}