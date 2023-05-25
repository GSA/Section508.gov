import {Component, Input, OnInit, Renderer2} from '@angular/core';
import * as docx from 'docx';
import {AlignmentType, HeadingLevel, LevelFormat, Paragraph, TextRun, WidthType, Table, TableRow, TableCell, BorderStyle, ExternalHyperlink} from 'docx';

@Component({
  selector: 'art-docx-download',
  templateUrl: './art-docx-download.component.html',
  styleUrls: ['./art-docx-download.component.scss']
})
export class ArtDocxDownloadComponent implements OnInit {
  @Input() params: { btnName: string, fileName: string } = { btnName: "", fileName: "" };
  @Input() markup: string = "";

  constructor(protected renderer: Renderer2) { }

  ngOnInit(): void {
  }

  /**
   * Click Event. Generates the docx file and sends it to the user.
   */
  generateFile(): void {

    if (!this.validateFilename(this.params.fileName)) {
      throw "Invalid filename: " + this.params.fileName;
    }

    let container = document.createElement('div');
    container.innerHTML = this.markup;
    let elements = this.traverseTree(container);

    let docElems: (Paragraph | Table)[] = [];
    //Used for different number list. If we have 3 group, they should have their own numbering
    let olNbr = 0;
    for (let i = 0, l = elements.length; i < l; i++) {
      let elem = elements[i];
      switch (elem.nodeName) {
        case 'P':
          if(elem.textContent !== ''){ // To avoid any empty space
            docElems.push(this.parseParagraph(elem));
          }
          break;
        case 'OL':
          docElems = docElems.concat(this.parseList(elem, true, olNbr));
          olNbr++; // Counting each set of ordering number list
          break;
        case 'UL':
          docElems = docElems.concat(this.parseList(elem, false,0));
          break;
        case 'H1':
        case 'H2':
        case 'H3':
        case 'H4':
        case 'H5':
        case 'H6':
          docElems = docElems.concat(this.parseHeader(elem));
          break;
        case 'TABLE':
          // Generate a table to be uas as a line
          docElems = docElems.concat(this.parseTable(elem));
          break;
        // case 'A':
        //   // For link at the root level not child level
        //   const child = elem.children[i];
        //   docElems = docElems.concat(this.parseLink(Array.from(child.childNodes), {type:"",olNbr:0}));
        //     break;
      }
    }

    let d: docx.Document = new docx.Document({
      styles: {
        default: {
          heading1: {
            run: {
              size: 48,
              font: 'Source Sans Pro Web',
              bold: true
            },
            paragraph: {
              spacing: {
                before: 0,
                after: 360, // 240 line units per line.
                line: 320
              }
            },
          },
          heading2: {
            run: {
              size: 40,
              font: 'Source Sans Pro Web',
              bold: true
            },
            paragraph: {
              alignment: AlignmentType.CENTER, // to center align the text
              spacing: {
                before: 0,
                after: 360, // 240 line units per line.
                line: 320
              }
            },
          },
          heading3: {
            run: {
              size: 40,
              font: 'Source Sans Pro Web',
              bold: true
            },
            paragraph: {
              spacing: {
                before: 0,
                after: 360, // 240 line units per line.
                line: 320
              }
            },
          },
          heading4: {
            run: {
              size: 36,
              font: 'Source Sans Pro Web',
              bold: true
            },
            paragraph: {
              spacing: {
                before: 0,
                after: 360, // 240 line units per line.
                line: 320
              }
            },
          },
          heading5: {
            run: {
              size: 32,
              font: 'Source Sans Pro Web',
              bold: true
            },
            paragraph: {
              spacing: {
                before: 0,
                after: 360, // 240 line units per line.
                line: 320
              }
            },
          },
          heading6: {
            run: {
              size: 28,
              font: 'Source Sans Pro Web',
              bold: true
            },
            paragraph: {
              spacing: {
                before: 0,
                after: 360, // 240 line units per line.
                line: 320
              }
            },
          },
        },
        paragraphStyles: [
          {
            id: 'default',
            name: 'default',
            basedOn: 'Normal',
            next: 'Normal',
            run: {
              size: 24, // half units. real font size will be half this value
              font: 'Source Sans Pro Web',
            },
            paragraph: {
              spacing: {
                before: 0,
                after: 360, // 240 line units per line.
                line: 320
              }
            },
          }
        ]
      },
      numbering: {
        config: [
          {
            reference: "number0", // This configuration is used for the first ordered list
            levels: [
              {
                level: 0,
                format: LevelFormat.DECIMAL,
                text: "%1",
                alignment: AlignmentType.START,
                start:1,
                style: {
                  paragraph: {
                    indent: { left: 720, hanging: 260 }
                  }
                }
              }
            ]
          },
          {
            reference: "number1", // This configuration is used for the 2nd ordered list. We might want to kae this dynamic
            levels: [
              {
                level: 0,
                start:1,
                format: LevelFormat.DECIMAL,
                text: "%1",
                alignment: AlignmentType.START,
                style: {
                  paragraph: {
                    indent: { left: 720, hanging: 260 }
                  }
                }
              }
            ]
          }
        ]
      },
      sections: [
        {
          children: docElems
        }
      ]
    });

    let a = document.createElement('a');
    document.body.appendChild(a);
    a.classList.add("display-none");

    docx.Packer.toBlob(d).then((b) => {
      let url = window.URL.createObjectURL(b);

      a.href= url;
      a.download = this.params.fileName + ".docx";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

  /**
   * Traverses the dom tree of the submitted markup and picks out relevant elements.
   *
   * @param root
   * @private
   */
  private traverseTree(root: Element): Element[] {
    let elems: Element[] = [];
    let leaves = ['P', 'OL', 'UL', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6','TABLE', 'A'];
    for (let i = 0, l = root.children.length; i < l; i++) {
      let child = root.children[i];
      if (leaves.includes(child.nodeName)) {
        elems.push(child);
      }
      else {
        elems = elems.concat(this.traverseTree(child));
      }
    }
    return elems;
  }

  /**
   * Parses a p tag into a Docx element.
   * @param p
   * @private
   */
  private parseParagraph(p: Element): Paragraph {
    let children = this.parseText(Array.from(p.childNodes));
    return new Paragraph({
      children: children,
      style: 'default'
    });
  }
 
  /**
   * @description Used to parse link element. For only a link and also for list number with embedded link. 
   * @param nodeElems the element with link as root or with list number as root and link as children. It should have maximum 3 nodes. starting node, link node and ending node
   * @param linkConfig  Used for the link embedded in a list item. Used to specified what list number reference to use 
   * @returns Type paragraph
   */
  private parseLink(nodeElems: Node[], linkConfig:{type?:string, olNbr:number} ): Paragraph {
    
    // Text extracted from the list number element before the link
    let rStart: TextRun;
    // Text extracted from the list number element after the link
    let rEnd: TextRun;
    
    // Node extracted from the list number element before the link
    const eStart = nodeElems[0];
    // Node extracted from the list number element after the link
    const eEnd = nodeElems[2];

    // Cleaning up the text content
    const textStart = (eStart.textContent ?? '').replace(/\s+/g, ' ');
    const textEnd = (eEnd.textContent ?? '').replace(/\s+/g, ' ');
    
    // Generating the  Textrun based on the first node
    rStart = new TextRun({
      text: textStart,
      style: 'default',
    });

    // Generating the Textrun based on the end node
    rEnd = new TextRun({
      text: textEnd,
      style: 'default',
    });
    
    // Capturing the node with the link element
    const p = nodeElems [1];

    let test0; // used to extract the text from the link element
    const elems = Array.from(p.childNodes);
    for (let i = 0, l = elems.length; i < l; i++) {
      let e = elems[i];
      // remove tab runs that occur in markup
      let text = (e.textContent ?? '').replace(/\s+/g, ' ')

      // strip leading whitespace from the first element
      if (i == 0) {
        test0 = text.trimStart();
      }
    }

    // Generating the children to be use to build de paragraph
    let children =  [
      rStart,
      new ExternalHyperlink({
          children: [
              new TextRun({
                  text: test0,
                  style: "Hyperlink",
              }),
          ],
          link: <string>test0,
      }),
      rEnd,
    ];
    //this.parseText(Array.from(p.childNodes));
  
    let paragraph = new Paragraph({});

    // Paragraph with link embedded in list number
    if(linkConfig.type && linkConfig.type === 'link'){
      paragraph = new Paragraph({
        children: children,
        style: 'default',
        numbering: {
          reference: 'number'+linkConfig.olNbr,
          level: 0
        }
      })
    }else{
      // simple link
      paragraph = new Paragraph({
        children: children,
        style: 'default'
      });
    }
    return paragraph;
  }

  
  /**
   * @description Used to generate a line by hiding all border except the top one
   * @param p The html element holding the table element
   * @returns Will return a table elements
   */
  private parseTable(p: Element): Table {
    return new Table({
      // Setting the width to be 10000, full width
      columnWidths: [10000, 1],
      rows: [
        // Only declaring on row
          new TableRow({
              children: [
                // Only declaring one cell
                  new TableCell({
                    width: {
                      size: 10000,
                      type: WidthType.DXA,
                  },
                      borders: {
                        // setting the top border to black
                          top: {
                              style: BorderStyle.THICK,
                              size: 7,
                              color: "000000",
                          },
                          // setting all the other border to white
                          bottom: {
                              style: BorderStyle.THICK,
                              size: 1,
                              color: "ffffff",
                          },
                          left: {
                              style: BorderStyle.THICK,
                              size: 1,
                              color: "ffffff",
                          },
                          right: {
                              style: BorderStyle.THICK,
                              size: 1,
                              color: "ffffff",
                          },
                      },
                      children: [],
                  })
              ],
          })
        ]
    })
  }

  /**
   *
   * @param list
   * @param ordered  Whether this list should be numbered or just bullet points
   * @description Parses lists into Docx elements.
   */
  private parseList(list: Element, ordered: boolean, olNbr:number): Paragraph[] {
    let ps: Paragraph[] = [];
    ps=[...this.parseSubList(ps, list, ordered,0,olNbr)];
    return ps;
  }

  /**
   * Parses lists and nested list into Docx elements.
   *
   * @param list
   * @param ordered  Whether this list should be numbered or just bullet points
   * @param childNumber nesting level or indexing level
   * @param ps paragraph array
   * @private
   */
  private parseSubList(ps: Paragraph[], list: Element, ordered: boolean, childNumber = 0, olNbr:number): Paragraph[] {

    //Lopping to child each node of the parent node
    for (let i = 0; i < list.children.length; i++) {
      let child = list.children[i];
      // If it is ordered list
      if (ordered) {
        // From the ol/il nodes, get all the child elements
        let elements = this.traverseTree(child);
        //  A child element in this ol/il is a link then process in this block
        if(elements.length > 0 && elements[0].nodeName === 'A'){
          // Using the parseLink to generate a paragraph with the link embedded inside
          // child.childNodes should only be 3 array max. 1st the start test before the link, 2nd array, the link node, 3rd array, the end text after the link
          const linkData = this.parseLink(Array.from(child.childNodes), {type:"link",olNbr:olNbr});
          ps.push(linkData);
        } else{ // If we don't have a link inside the ol/li, just generate a list number without a link
          ps.push(new Paragraph({
            children: this.parseText(Array.from(child.childNodes)),
            style: 'default',
            numbering: {
              reference: 'number'+olNbr,
              level: 0
            }
          }));
        }
      }// If it is not ordered list
      else {
        // If a child of the current node has a nested ol/ul
        const olNode = this.findNode(child,'UL');
        ps.push(new Paragraph({
          children: this.parseText(Array.from(child.childNodes)),
          style: 'default',
          bullet: {
            level: childNumber // updating index number
          },
        }));
        // If there is a nested ul
        if(olNode) {
          childNumber++; // move on padding up
          this.parseSubList(ps, child.children[1], false,childNumber, olNbr);
          childNumber--; // after the recurssion is done, go one padding down

        }
      }
    }
    return ps;
  }

  /**
   * @description form a node, find if a child node has an UL node
   * @param node 
   * @param nodeName 
   * @returns boolean
   */
  findNode(node:Element, nodeName:string):boolean{
    let found:boolean =false;
    node.childNodes.forEach(eachNode => { 
        if(eachNode.nodeName === nodeName){
          found = true;
        }
    })
    return found;
  }

  /**
   * Parses H* tags into Docx elements.
   * @param elem
   * @private
   */
  private parseHeader(elem: Element): Paragraph {
    let level = elem.nodeName[1];
    let headingLevel: HeadingLevel = HeadingLevel.TITLE;
    switch (level) {
      case "1":
        headingLevel = HeadingLevel.HEADING_1;
        break;
      case "2":
        headingLevel = HeadingLevel.HEADING_2;
        break;
      case "3":
        headingLevel = HeadingLevel.HEADING_3;
        break;
      case "4":
        headingLevel = HeadingLevel.HEADING_4;
        break;
      case "5":
        headingLevel = HeadingLevel.HEADING_5;
        break;
      case "6":
        headingLevel = HeadingLevel.HEADING_6;
        break;
    }
    return new Paragraph({
      children: this.parseText(Array.from(elem.childNodes)),
      heading: headingLevel,
    });
  }

  /**
   * Parses the text of an element into Docx elements, taking typographic elements into account.
   * @param elems
   * @private
   */
  private parseText(elems: Node[]): TextRun[] {
    let r: TextRun[] = [];

    for (let i = 0, l = elems.length; i < l; i++) {
      let e = elems[i];
      // remove tab runs that occur in markup
      let text = (e.textContent ?? '').replace(/\s+/g, ' ')

      // strip leading whitespace from the first element
      if (i == 0) {
        text = text.trimStart();
      }
      switch (e.nodeType) {
        case 1:
          // This is an element like b or i
            switch (e.nodeName) {
              case 'B':
              case 'STRONG':
                r.push(new TextRun({
                  text: text,
                  style: 'default',
                  bold: true
                }));
                break;
              case 'I':
                r.push(new TextRun({
                  text: text,
                  style: 'default',
                  italics: true
                }));
            }
          break;
        case 3:
          r.push(new TextRun({
            text: text,
            style: 'default',
          }))
          break;
      }
    }

    return r;
  }

  /**
   * Tests that the given filename is valid.
   * @param filename
   * @protected
   */
  protected validateFilename(filename: string): boolean {
    let test1: RegExp = /^[^\\/:*?"<>|]+$/;
    let test2: RegExp = /^\./;
    let test3: RegExp = /^(nul|prn|con|lpt[0-9]|com[0-9])(\.|$)/i;
    return test1.test(filename) && !test2.test(filename) && !test3.test(filename);
  }

}
