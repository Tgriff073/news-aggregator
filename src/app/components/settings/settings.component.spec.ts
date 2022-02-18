import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatMenuModule } from '@angular/material/menu';
import { SettingsComponent } from './settings.component';
import {MatCheckboxHarness} from '@angular/material/checkbox/testing';
import {MatButtonHarness} from '@angular/material/button/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CookieService } from 'src/app/services/cookie-service/cookie.service';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let loader: HarnessLoader;
  let cookieService:CookieService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsComponent ],
      imports:[ CommonModule,
        MatMenuModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        RouterModule
      ],
        providers:[{provide: Router, useValue:{}}, {provide: ActivatedRoute, useValue:{}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    cookieService  = TestBed.inject(CookieService);
  });

  afterEach(() => {
    cookieService.removeCookie('user-settings');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('checkedChange', () => {
    const categories = [
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology'
    ];
    categories.forEach((category, index)=>{
      it(`should change ${category} in categories settingsCategories array to true when is box is clicked`, async () => {
        const checkBoxHarness = await loader.getHarness(MatCheckboxHarness.with({selector: `#test-checkbox-${category}`}));
        await checkBoxHarness.check();
        expect(component.settingsCategories[index].value).toEqual(true);
      });
    })


  });
  describe('saveButton', () => {
    it('should save settings to cookie if user clicks save button', async() => {
      const expectedCookie = {categories:['business', 'entertainment']};
      const saveButton:MatButtonHarness = await loader.getHarness(MatButtonHarness.with({selector: `#test-save-button`}));

      component.settingsCategories[0].value = true;
      component.settingsCategories[1].value = true;

      await saveButton.click();

      const result = cookieService.getCookie('user-settings');
      expect(result).toEqual(expectedCookie);

    });
  });
  describe('getSelectedCategoriesArray', () => {
    it('should return array of category names that are checked', () => {
      const expectedResult = ['business', 'general'];

      component.settingsCategories[0].value = true;
      component.settingsCategories[2].value = true;
      const result = component.getSelectedCategoriesArray();

      expect(result).toEqual(expectedResult);
    });

  });
});
